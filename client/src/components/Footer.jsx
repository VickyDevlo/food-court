import { NAV, CAFE, INSTAGRAM_URL } from "../assets/data/data";
import { scrollTo } from "../config/motion";

export const Footer = () => {
  return (
    <footer className="overflow-hidden bg-ink px-5 pb-28 pt-16 text-paper md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">
            Chili & Chill Food Court
          </p>
          <p className="mt-3 max-w-xs text-paper/70">
            Fresh burgers, cold coffee, pizza and shakes, made to order every
            day.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-display font-bold text-turmeric">Explore</p>
          <ul className="mt-3 space-y-2">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-paper/75 hover:text-turmeric cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display font-bold text-turmeric">Visit us</p>
          <address className="mt-3 space-y-2 not-italic text-paper/75">
            <p>{CAFE.address}</p>
            <p>{CAFE.phone}</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block hover:text-turmeric"
            >
              @{CAFE.handle} on Instagram
            </a>
          </address>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="mx-auto mt-14 max-w-6xl select-none font-display text-[15vw] font-extrabold leading-none tracking-tighter text-paper/10 md:text-[10rem]"
      >
        Chili & Chill
      </p>
      <p className="mx-auto mt-6 max-w-6xl border-t border-paper/15 pt-6 text-sm text-paper/50">
        © {new Date().getFullYear()} Chili & Chill Food Court. All rights reserved.
      </p>
    </footer>
  );
};
