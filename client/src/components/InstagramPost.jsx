import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { POSTS, INSTAGRAM_URL, CAFE } from "../assets/data/data";
import { stagger, pop } from "../config/motion";
import { Section, Heading } from "../shared/Section";
import { Image } from "../shared/Image";
import { InstagramIcon } from "../assets/InstagramIcon";

export const InstagramPost = () => {
  return (
    <Section id="instagram" className="bg-chili text-paper">
      <Heading
        title="Delivered, then photographed"
        sub={`Real orders from real tables. Tag @${CAFE.handle} and you might see yours here.`}
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 scrollbar-none md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0"
      >
        {POSTS.map((p, i) => (
          <motion.a
            key={i}
            variants={pop}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={`Instagram post ${i + 1}`}
            className="block w-64 shrink-0 snap-center overflow-hidden rounded-2xl border-2 border-ink bg-paper text-ink shadow-pop md:w-auto"
          >
            <div className="flex items-center gap-3 p-3">
              <span className="grid size-9 place-items-center rounded-full bg-ink font-display font-bold text-turmeric">
                S
              </span>
              <div className="text-sm leading-tight">
                <p className="font-bold">{CAFE.handle}</p>
                <p className="text-ink/60">Delivered today</p>
              </div>
            </div>
            <Image
              id={p.img}
              w={600}
              alt={p.caption}
              className="aspect-square w-full object-cover"
            />
            <div className="p-3 text-sm">
              <p className="flex items-center gap-1.5 font-bold">
                <Heart size={16} className="fill-chili text-chili" />{" "}
                {p.likes.toLocaleString("en-IN")} likes
              </p>
              <p className="mt-1 text-ink/80">{p.caption}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
      <div className="mt-8 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-8 py-4 sm:text-lg font-bold text-paper shadow-[4px_4px_0_0_var(--color-turmeric)] transition hover:-translate-y-0.5"
        >
          <InstagramIcon size={20} /> Visit our Instagram page
        </a>
      </div>
    </Section>
  );
};
