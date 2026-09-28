import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { GALLERY } from "../assets/data/data";
import { preload, slide } from "../utils/gallery.utils";
import { ViewerImage } from "./ViewerImage";

export const PhotoViewer = ({
  selectedIndex,
  direction,
  onClose,
  onNavigate,
}) => {
  const open = selectedIndex !== null;

  const go = useCallback(
    (directionValue) => {
      onNavigate(directionValue);
    },
    [onNavigate],
  );

  // Keyboard + body scroll lock
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        go(1);
      }

      if (event.key === "ArrowLeft") {
        go(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  // Preload nearby images
  useEffect(() => {
    if (!open) return;

    [1, -1, 2].forEach((offset) => {
      const index = (selectedIndex + offset + GALLERY.length) % GALLERY.length;

      preload(GALLERY[index]);
    });
  }, [open, selectedIndex]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        className="
          fixed inset-0 z-60
          flex flex-col
          bg-ink/95
        "
      >
        {/* Header */}
        <div className="flex items-center justify-end p-4 text-paper">
          <button
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close photo viewer"
            className="
              grid size-11 cursor-pointer
              place-items-center rounded-full
              border-2 border-ink
              bg-paper text-ink
              hover:bg-turmeric
            "
          >
            <X />
          </button>
        </div>

        {/* Main viewer */}
        <div
          className="
            relative flex flex-1
            items-center justify-center
            overflow-hidden
            px-2 sm:px-20
          "
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={selectedIndex}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.5}
              onDragEnd={(_, { offset }) => {
                if (offset.x < -80) {
                  go(1);
                } else if (offset.x > 80) {
                  go(-1);
                }
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                w-full
                cursor-grab
                active:cursor-grabbing
              "
            >
              <ViewerImage
                id={GALLERY[selectedIndex]}
                alt={`Food and café photo ${selectedIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Previous */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            aria-label="Previous photo"
            className="
              absolute left-2 top-1/2
              grid size-11
              -translate-y-1/2
              place-items-center
              cursor-pointer
              rounded-full
              border-2 border-ink
              bg-turmeric text-ink
              transition hover:bg-paper
              sm:left-5 sm:size-14
            "
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            aria-label="Next photo"
            className="
              absolute right-2 top-1/2
              grid size-11
              -translate-y-1/2
              place-items-center
              cursor-pointer
              rounded-full
              border-2 border-ink
              bg-turmeric text-ink
              transition hover:bg-paper
              sm:right-5 sm:size-14
            "
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Footer */}
        <p className="p-4 text-center text-sm text-paper/60">
          Use the arrow buttons, the arrow keys, or swipe to move between
          photos.
        </p>
      </motion.div>
    </AnimatePresence>
  );
};
