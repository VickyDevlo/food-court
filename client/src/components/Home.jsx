import { motion } from "motion/react";
import { Star as Sep } from "lucide-react";
import { IMG, MARQUEE, INSTAGRAM_URL, FACTS } from "../assets/data/data";
import { rise, stagger, scrollTo } from "../config/motion";
import { Image } from "../shared/Image";
import { InstagramIcon } from "../assets/InstagramIcon";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="overflow-hidden bg-turmeric px-5 pb-20 pt-28 md:pt-36"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.p
              variants={rise}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-sm font-semibold"
            >
              <span className="size-2 animate-pulse rounded-full bg-leaf" />{" "}
              Open daily, 10 AM to 10 PM
            </motion.p>
            <motion.h1
              variants={rise}
              className="mt-5 text-balance font-display text-2xl font-extrabold leading-[1.05] tracking-wide sm:mt-6 sm:text-6xl sm:leading-[0.95] lg:text-7xl xl:text-8xl"
            >
              Burgers, cold coffee and everything you crave.
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-6 max-w-lg text-lg leading-relaxed"
            >
              Chili & Chill Food Court is the neighbourhood spot where every order is
              cooked fresh, served hot and never rushed out cold.
            </motion.p>
            <motion.div variants={rise} className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("menu")}
                className="rounded-full border-2 border-ink bg-ink text-sm xl:text-lg px-2 py-2 xl:px-7 xl:py-3 cursor-pointer font-bold text-turmeric shadow-[4px_4px_0_0_var(--color-chili)] transition hover:-translate-y-0.5"
              >
                See the menu
              </button>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-sm xl:text-lg px-2 py-2 xl:px-7 xl:py-3 font-bold transition hover:bg-ink hover:text-turmeric"
              >
                <InstagramIcon /> Follow us
              </a>
            </motion.div>
            <motion.ul
              variants={rise}
              className="mt-10 grid gap-3 text-sm font-semibold sm:grid-cols-3"
            >
              {FACTS.map(([Icon, text]) => (
                <li
                  key={text}
                  className="flex items-start gap-2 border-t-2 border-ink pt-3"
                >
                  <Icon size={18} className="mt-0.5 shrink-0" /> {text}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:col-span-5"
          >
            <div className="aspect-square overflow-hidden rounded-full border-4 border-ink shadow-pop">
              <Image
                id={IMG.burger}
                w={900}
                eager
                alt="A stacked cheeseburger with fresh vegetables"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-3 w-36 rotate-[-7deg] border-4 border-paper bg-paper shadow-pop sm:-left-8 sm:w-44">
              <Image
                id={IMG.coffee}
                w={400}
                eager
                alt="Iced cold coffee"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <motion.svg
              viewBox="0 0 120 120"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -right-2 -top-4 size-28 rounded-full border-2 border-ink bg-paper sm:-right-6 sm:size-32"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="ring"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <text fontSize="12.5" fontWeight="700" fill="#16131c">
                <textPath href="#ring" textLength="272" lengthAdjust="spacing">
                  Fresh and hot, made to order.{" "}
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </div>
      </section>

      <div
        className="overflow-hidden border-y-2 border-ink bg-ink py-4 text-paper"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 font-display text-sm xl:text-2xl font-bold"
            >
              {w} <Sep size={18} className="fill-turmeric text-turmeric" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
