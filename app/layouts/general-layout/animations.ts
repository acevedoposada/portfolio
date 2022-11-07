export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export const navbarVariants = {
  collapsed: {
    height: 96,
    transition: {
      ease: "easeIn",
    },
  },
  amplified: {
    height: 490,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export const navbarItemsVariants = {
  collapsed: {
    scale: 0.1,
    opacity: 0,
  },
  amplified: {
    scale: 1,
    opacity: 1,
  },
};

export const toogleButtonVariants = {
  open: { scale: 1 },
  close: { scale: 0 },
};
