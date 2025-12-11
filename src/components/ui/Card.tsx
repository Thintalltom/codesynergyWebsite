import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'elevated' | 'flat';
}
export const Card = forwardRef<HTMLDivElement, CardProps>(({
  className = '',
  variant = 'default',
  children,
  ...props
}, ref) => {
  const variants = {
    default: 'bg-white border border-stone-200',
    elevated: 'bg-white shadow-lg border-transparent',
    flat: 'bg-stone-50 border-transparent'
  };
  return <motion.div ref={ref} className={`rounded-xl overflow-hidden ${variants[variant]} ${className}`} {...props}>
        {children}
      </motion.div>;
});
Card.displayName = 'Card';