import { Phone, Navigation } from "lucide-react";
import { PHONE_HREF, DIRECTIONS_URL } from "../assets/data/data";

export const MobileActionBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t-2 border-ink bg-paper p-3 md:hidden">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink py-3 font-bold text-turmeric"
      >
        <Phone size={18} /> Call
      </a>
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-chili py-3 font-bold text-paper"
      >
        <Navigation size={18} /> Directions
      </a>
    </div>
  );
};
