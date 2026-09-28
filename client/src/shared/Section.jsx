import { Reveal } from "./Reveal";

export const Section = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      className={`scroll-mt-16 px-5 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export const Heading = ({ title, sub, className = "" }) => {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-wide sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed opacity-75">{sub}</p>}
    </Reveal>
  );
};
