import { motion } from 'framer-motion';

type AnimatedTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedTitle({ children, className }: AnimatedTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
