import { motion } from 'framer-motion';

type PageWrapperProps = {
  children: React.ReactNode;
  direction: number;
};

const variants = {
  initial: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  }),
};

export const PageWrapper = ({ children, direction }: PageWrapperProps) => {
  return (
    <motion.div
      className='page-wrapper'
      custom={direction}
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};
