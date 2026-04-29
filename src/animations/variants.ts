export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
  },
  exit: { 
    opacity: 0, 
    filter: 'blur(10px)',
    transition: { duration: 0.8 }
  },
};

export const letterAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 1,
      ease: [0.19, 1, 0.22, 1]
    }
  })
};

export const revealAnimation = {
  initial: { scaleX: 0 },
  animate: { 
    scaleX: 1,
    transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
  }
};
