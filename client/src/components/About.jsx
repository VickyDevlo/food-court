import { motion } from "motion/react";
import { EASE, VIEW } from "../config/motion";
import { Image } from "../shared/Image";
import { IMG, POINTS } from "../assets/data/data";
import { Heading, Section } from "../shared/Section";
import { Reveal } from "../shared/Reveal";
import { Check } from "lucide-react";

export const About = () => {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg pb-16">
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: 50 }}
            whileInView={{
              opacity: 1,
              rotate: -3,
              y: 0,
              transition: { duration: 1.3, ease: EASE },
            }}
            viewport={VIEW}
            className="w-4/5 border-4 border-paper bg-paper shadow-pop"
          >
            <Image
              id={IMG.cafe}
              w={800}
              alt="Inside Chili & Chill Food Court"
              className="aspect-4/5 w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 10, y: 60 }}
            whileInView={{
              opacity: 1,
              rotate: 4,
              y: 0,
              transition: { duration: 1.3, delay: 0.35, ease: EASE },
            }}
            viewport={VIEW}
            className="absolute bottom-0 right-0 w-1/2 border-4 border-paper bg-paper shadow-pop"
          >
            <Image
              id={IMG.cafe2}
              w={600}
              alt="Seating area at the café"
              className="aspect-square w-full object-cover"
            />
          </motion.div>
        </div>

        <div>
          <Heading
            title="A neighbourhood food court that feels like home"
            sub="Chili & Chill started with one grill and a simple rule: serve what you would happily feed your own family. Years later, the grill count has grown and the rule hasn't changed."
          />
          <Reveal as="ul" delay={0.25} className="mt-8 space-y-4">
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 font-medium">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-paper">
                    <Check size={14} strokeWidth={3} />
                  </span>{" "}
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
