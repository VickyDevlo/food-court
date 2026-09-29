import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { NAV, INSTAGRAM_URL } from "../assets/data/data";
import { scrollTo } from "../config/motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { InstagramIcon } from "../assets/InstagramIcon";

const IDS = NAV.map(([id]) => id);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(null);
  const spy = useActiveSection(IDS);
  const active = locked ?? spy;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // release the lock once the click-scroll has finished
  useEffect(() => {
    if (!locked) return;
    let idle;
    const fallback = setTimeout(() => setLocked(null), 1800);
    const onScroll = () => {
      clearTimeout(idle);
      idle = setTimeout(() => setLocked(null), 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(fallback);
      clearTimeout(idle);
      window.removeEventListener("scroll", onScroll);
    };
  }, [locked]);

  const go = (id) => {
    setOpen(false);
    setLocked(id);
    setTimeout(() => scrollTo(id), 60);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="fixed inset-x-0 top-3 z-50 px-3"
      >
        <nav
          aria-label="Main"
          className="max-w-full mx-auto flex h-14 items-center justify-between gap-2 rounded-full border-2 border-ink bg-paper pl-2 pr-2 shadow-[4px_4px_0_0_var(--color-ink)] sm:pl-3"
        >
          <button
            onClick={() => go("home")}
            className="flex min-w-0 shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap"
            aria-label="Chili & Chill Food Court, back to top"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-chili font-display text-lg font-extrabold text-paper">
              C
            </span>
            <span className="flex flex-col text-left font-display leading-none">
              <span className="text-lg font-extrabold">Chili & Chill</span>
              <span className="mt-0.5 text-[11px] font-bold tracking-wide text-chili">
                Food Court
              </span>
            </span>
          </button>

          <ul className="hidden items-center md:flex">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-ink"
                    />
                  )}
                  <span
                    className={`relative transition-colors duration-300 ${
                      active === id ? "text-turmeric" : "hover:text-chili"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              className="hidden lg:inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-full border-2 border-ink bg-chili px-0 text-sm font-bold text-paper transition hover:bg-turmeric hover:text-ink sm:px-4"
            >
              <InstagramIcon size={18} />{" "}
              <span className="hidden sm:inline">Follow</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-10 place-items-center rounded-full border-2 cursor-pointer border-ink bg-paper md:hidden"
            >
              {open ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-turmeric px-6 pb-8 pt-20 md:hidden"
          >
            <ul className="flex flex-1 flex-col justify-center overflow-y-auto overscroll-contain px-1">
              {NAV.map(([id, label], i) => (
                <motion.li
                  key={id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b-2 border-ink/15 last:border-0"
                >
                  <button
                    onClick={() => go(id)}
                    aria-current={active === id ? "true" : undefined}
                    className={`flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-3 text-left font-display text-xl font-extrabold [-webkit-tap-highlight-color:transparent]
                    transition-[transform,color] duration-300 active:scale-[0.98] active:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili
                    ${active === id ? "text-chili" : "text-ink"}`}
                  >
                    <span className="truncate">{label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink py-3 text-sm font-bold text-turmeric"
            >
              <InstagramIcon size={20} /> Follow us on Instagram
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
