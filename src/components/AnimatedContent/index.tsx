import { motion } from 'framer-motion';

type AnimatedContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedContent({ children, className }: AnimatedContentProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
