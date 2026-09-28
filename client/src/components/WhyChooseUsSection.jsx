import { motion } from "motion/react";
import { WHY, TONE } from "../assets/data/data";
import { stagger, pop } from "../config/motion";
import { Heading, Section } from "../shared/Section";

export const WhyChooseUsSection = () => {
  return (
    <Section id="why">
      <Heading
        title="Why we're different"
        sub="Plenty of places sell burgers. Here is what you get at ours."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-6 md:grid-cols-6"
      >
        {WHY.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            variants={pop}
            className={`flex min-h-60 flex-col justify-between rounded-2xl border-2 border-ink p-7 shadow-pop ${TONE[i]}`}
          >
            <Icon size={36} strokeWidth={2} />
            <div>
              <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed opacity-90">{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
