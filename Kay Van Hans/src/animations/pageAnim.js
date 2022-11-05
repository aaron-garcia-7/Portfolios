export const pageAnim = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      // duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.8,
      // duration: 1.4,
    },
  },
};

export const swiperAnim = {
  initial: {
    bottom: "-50%",
    height: 0,
  },
  animate: {
    bottom: ["-50%", "100%"],
    height: ["50vh", "180vh", "50vh"],
    transition: {
      duration: 1.4,
    },
  },
  exit: {
    bottom: "-50%",
    height: 0,
  },
};
