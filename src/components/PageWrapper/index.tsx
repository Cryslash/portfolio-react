import { motion } from 'framer-motion';
import { useScrollDirection } from '../../contexts/ScrollContext';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  const { direction, setManualTrigger } = useScrollDirection();

  const variants = {
    initial: (dir: number) => ({
      y: dir === 1 ? '100%' : '-100%',
      opacity: 0,
    }),
    animate: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir: number) => ({
      y: dir === 1 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      onAnimationComplete={() => setManualTrigger(false)} // reset
    >
      {children}
    </motion.div>
  );
}
