export const VIEW = { once: true, amount: 0.3 };
export const EASE = [0.16, 1, 0.3, 1];
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
export const rise = {
  hidden: { opacity: 0, y: 48 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay },
  }),
};
export const pop = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};
export const scrollTo = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
