import { motion } from "motion/react";
import { Maximize } from "lucide-react";
import { GALLERY } from "../assets/data/data";
import { Image } from "../shared/Image";
import { EASE } from "../config/motion";
import { RATIO, preload } from "../utils/gallery.utils";

export const GalleryGrid = ({ onSelect }) => {
  return (
    <div className="mt-14 columns-2 gap-4 lg:columns-4">
      {GALLERY.map((galleryId, index) => (
        <motion.button
          key={galleryId}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: EASE,
              delay: (index % 4) * 0.12,
            },
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          onClick={() => onSelect(index)}
          onPointerEnter={() => preload(galleryId)}
          onFocus={() => preload(galleryId)}
          onTouchStart={() => preload(galleryId)}
          aria-label={`View photo ${index + 1} full screen`}
          className="
            group relative mb-4 block w-full
            break-inside-avoid overflow-hidden
            rounded-xl border-2 border-ink
            cursor-pointer
            shadow-[4px_4px_0_0_var(--color-ink)]
          "
        >
          <Image
            id={galleryId}
            w={600}
            alt={`Food and café photo ${index + 1}`}
            className={`
              ${RATIO[index % 3]}
              w-full object-cover
              transition duration-500
              group-hover:scale-105
            `}
          />

          {/* Hover overlay */}
          <span
            className="
              absolute inset-0
              bg-ink/0
              transition duration-300
              md:group-hover:bg-ink/30
              md:group-focus-visible:bg-ink/30
            "
          />

          {/* Fullscreen icon */}
          <span
            className="
              absolute inset-0 m-auto
              hidden size-12
              scale-90 place-items-center
              rounded-full bg-turmeric
              opacity-0 transition duration-300
              md:grid
              md:group-hover:scale-100
              md:group-hover:opacity-100
              md:group-focus-visible:scale-100
              md:group-focus-visible:opacity-100
            "
          >
            <Maximize size={20} strokeWidth={2.5} />
          </span>
        </motion.button>
      ))}
    </div>
  );
};
