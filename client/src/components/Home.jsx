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
        <div className="mx-auto grid max-w-6xl items-center gap-2 sm:gap-14 lg:grid-cols-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 lg:col-span-7"
          >
            {/* <motion.p
              variants={rise}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-sm font-semibold"
            >
              <span className="size-2 animate-pulse rounded-full bg-leaf" />{" "}
              Open daily, 10 AM to 10 PM
            </motion.p> */}
            <motion.h1
              variants={rise}
              className="mt-5 text-balance font-display text-2xl font-extrabold leading-[1.05] tracking-wide sm:mt-6 sm:text-6xl sm:leading-[0.95] lg:text-7xl xl:text-8xl"
            >
              Burgers, cold coffee and everything you crave.
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed"
            >
              Chili & Chill Food Court is the neighbourhood spot where every
              order is cooked fresh, served hot and never rushed out cold.
            </motion.p>
            <motion.div
              variants={rise}
              className="mt-6 flex max-sm:justify-center gap-3"
            >
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
            className="relative order-1 mx-auto mb-8 w-[72%] max-w-65 min-[420px]:max-w-75 sm:mb-10 sm:max-w-sm md:max-w-md lg:order-2 lg:col-span-5 lg:mb-0 lg:w-full"
          >
            <div className="relative isolate aspect-square overflow-hidden rounded-full border-[3px] border-paper bg-ink shadow-pop sm:border-4">
              <Image
                id={IMG.burger}
                w={900}
                eager
                alt="A stacked cheeseburger with fresh vegetables"
                className="absolute inset-0 block size-full scale-[1.02] object-cover"
              />
            </div>

            {/* coffee card */}
            <div className="absolute -bottom-4 -left-2 w-[34%] max-w-[110px] rotate-[-7deg] border-[3px] border-paper bg-paper shadow-pop min-[420px]:-left-4 sm:-bottom-6 sm:-left-8 sm:w-44 sm:max-w-none sm:border-4">
              <Image
                id={IMG.coffee}
                w={400}
                eager
                alt="Iced cold coffee"
                className="aspect-4/5 w-full object-cover"
              />
            </div>

            {/* rotating badge */}
            <div className="absolute -right-2 -top-3 size-20 min-[420px]:size-24 sm:-right-6 sm:-top-4 sm:size-32">
              <motion.svg
                viewBox="0 0 120 120"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="size-full rounded-full border-2 border-ink bg-paper"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="ring"
                    d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                  />
                </defs>
                <text
                  fontSize="11"
                  fontWeight="800"
                  letterSpacing="1.5"
                  fill="#16131c"
                  style={{ textTransform: "uppercase" }}
                >
                  <textPath
                    href="#ring"
                    textLength="279"
                    lengthAdjust="spacing"
                  >
                    Fresh • Hot • Made to order •{" "}
                  </textPath>
                </text>
                <circle
                  cx="60"
                  cy="60"
                  r="31"
                  fill="none"
                  stroke="#16131c"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
              </motion.svg>

              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-8 place-items-center rounded-full bg-ink text-base min-[420px]:size-10 min-[420px]:text-lg sm:size-14 sm:text-2xl">
                  🍔
                </div>
              </div>
            </div>
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
