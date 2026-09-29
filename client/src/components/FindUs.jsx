import { motion } from "motion/react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { CAFE, PHONE_HREF, DIRECTIONS_URL } from "../assets/data/data";
import { Section, Heading } from "../shared/Section";
import { VIEW, EASE } from "../config/motion";
import { Reveal } from "../shared/Reveal";

export const FindUs = () => {
  const rows = [
    [MapPin, "Address", CAFE.address],
    [Phone, "Contact us", CAFE.phone, PHONE_HREF],
    [Mail, "Email", CAFE.email, `mailto:${CAFE.email}`],
  ];

  return (
    <Section id="findus">
      <Heading
        title="Find us, then find a seat"
        sub="Free parking is right outside. Walk-ins are always welcome."
      />
      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <Reveal delay={0.25} className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border-2 border-ink bg-ink p-5 text-paper shadow-pop-y">
            <ul className="divide-y-2 divide-paper/20">
              {rows.map(([Icon, label, value, href]) => (
                <li key={label} className="flex gap-4 py-4 first:pt-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-turmeric text-ink">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold sm:text-[16px]">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="wrap-break-word text-[13px] text-paper/75 underline-offset-4 hover:text-turmeric hover:underline sm:text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[13px] text-paper/75 sm:text-sm">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-2 border-t-2 border-paper/20 pt-5">
              <h3 className="font-display text-xl font-bold">Opening hours</h3>
              <div className="mt-3 space-y-1">
                {CAFE.hours.map((h) => (
                  <div
                    key={h.label}
                    className="flex flex-wrap justify-between gap-x-4 rounded-lg bg-turmeric px-3 py-2 text-sm font-bold text-ink"
                  >
                    <span>{h.label}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: EASE },
          }}
          viewport={VIEW}
          transition={{ duration: 0.6 }}
          className="relative min-h-88 min-w-0 overflow-hidden rounded-2xl border-2 border-ink shadow-pop lg:col-span-7 lg:min-h-full"
        >
          <iframe
            title="Map showing Chili & Chill Food Court"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CAFE.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 grayscale-[.6] sepia-[.35] contrast-110 transition hover:grayscale-0 hover:sepia-0"
          />
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-turmeric px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0_0_var(--color-ink)]"
          >
            <Navigation size={16} /> Get directions
          </a>
        </motion.div>
      </div>
    </Section>
  );
};
