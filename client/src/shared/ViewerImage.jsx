import { useState } from "react";
import { img } from "../assets/data/data";
import { FULL, ready} from '../utils/gallery.utils'

export const ViewerImage = ({ id, alt }) => {
  const [loaded, setLoaded] = useState(() =>
    ready.has(id),
  );

  const imageClass =
    "col-start-1 row-start-1 max-h-[80vh] w-full rounded-xl border-4 border-paper object-contain";

  return (
    <div className="grid w-full place-items-center">
      {/* Low-resolution image shown immediately */}
      <img
        src={img(id, 600)}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={imageClass}
      />

      {/* Full-resolution image */}
      <img
        src={img(id, FULL)}
        alt={alt}
        draggable={false}
        decoding="async"
        onLoad={() => {
          ready.add(id);
          setLoaded(true);
        }}
        className={`${imageClass} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}