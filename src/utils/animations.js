// Animation variants for framer-motion
export const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } }
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};

