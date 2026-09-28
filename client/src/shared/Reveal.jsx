import { motion } from "motion/react";
import { rise, VIEW } from "../config/motion"

export const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      variants={rise}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
      className={className}
    >
      {children}
    </Tag>
  );
};
