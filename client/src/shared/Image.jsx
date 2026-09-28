import { useState } from "react";
import { img } from "../assets/data/data";

export const Image = ({ id, w = 800, alt, eager = false, className = "" }) => {
  const [ok, setOk] = useState(true);
  if (!ok)
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} bg-turmeric/40`}
      />
    );
  return (
    <img
      src={img(id, w)}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      onError={() => setOk(false)}
      className={className}
    />
  );
}
