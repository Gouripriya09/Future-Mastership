export const fadeAnimationVariants = {
  initial: {
    opacity: 0.1,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  },
};
export const footerVariant = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export const Variant2 = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.5,
    },
  }),
};

export const Variant3 = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 50,
  },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.24 * i,
      duration: 0.5,
    },
  }),
};
