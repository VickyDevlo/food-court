import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import { MENU, CATS, PHONE_HREF } from "../assets/data/data";
import { Heading, Section } from "../shared/Section";
import { Image } from "../shared/Image";
import { VIEW, EASE } from "../config/motion";

export const MenuSection = () => {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? MENU : MENU.filter((m) => m.cat === cat);

  return (
    <Section id="menu" className="bg-ink text-paper">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Heading
          title="Pick your plate"
          sub="Made to order and priced fair. Ask for extra cheese, we won't judge."
        />
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex flex-wrap gap-2"
        >
          {CATS.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full border-2 px-4 py-2 text-sm font-bold cursor-pointer transition ${cat === c ? "border-turmeric bg-turmeric text-ink" : "border-paper/30 hover:border-paper"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((m, i) => (
            <motion.article
              layout
              key={m.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: EASE,
                  delay: (i % 4) * 0.12,
                },
              }}
              viewport={VIEW}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ rotate: -1.5, y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-paper text-ink shadow-pop-y"
            >
              <div className="relative overflow-hidden">
                <Image
                  id={m.img}
                  w={600}
                  alt={m.name}
                  className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {/* <span className="absolute right-3 top-3 grid size-16 rotate-12 place-items-center rounded-full border-2 border-ink bg-chili font-display text-lg font-extrabold text-paper">
                  ₹{m.price}
                </span> */}
                <span className="absolute bottom-3 left-3 rounded-full border-2 border-ink bg-paper px-3 py-0.5 text-xs font-bold">
                  {m.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold leading-tight">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {m.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 flex flex-col flex-wrap justify-between gap-5 border-t-2 border-paper/20 pt-8 sm:flex-row items-center">
        <p className="font-display text-2xl font-bold">
          Hungry right now? Call and we'll have it ready.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-turmeric px-6 py-3 font-bold text-ink transition hover:bg-paper"
        >
          <Phone size={18} /> Call to order
        </a>
      </div>
    </Section>
  );
};
