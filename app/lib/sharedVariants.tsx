import type { Variants } from "framer-motion";

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const listingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: .25,
      delayChildren: .5,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .25,
    },
  },
};
