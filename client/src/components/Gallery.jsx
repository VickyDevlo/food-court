import { useCallback, useState } from "react";

import { GALLERY } from "../assets/data/data";
import { Section, Heading } from "../shared/Section";
import { GalleryGrid } from "../shared/GalleryGrid";
import { PhotoViewer } from "../shared/PhotoViewer";

export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [direction, setDirection] = useState(0);

  const open = selectedIndex !== null;

  const handleSelect = useCallback((index) => {
    setDirection(0);
    setSelectedIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNavigate = useCallback((value) => {
    setDirection(value);

    setSelectedIndex((current) => {
      if (current === null) return null;

      return (current + value + GALLERY.length) % GALLERY.length;
    });
  }, []);

  return (
    <Section id="gallery" className="bg-turmeric">
      <Heading
        title="From our kitchen to your table"
        sub="Hover over a photo and tap the full screen icon to see it bigger."
      />

      <GalleryGrid onSelect={handleSelect} />

      {open && (
        <PhotoViewer
          selectedIndex={selectedIndex}
          direction={direction}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}
    </Section>
  );
};
