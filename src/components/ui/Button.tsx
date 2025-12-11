import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 focus-visible:ring-orange-600 shadow-sm',
    secondary: 'bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-600 shadow-sm',
    outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 focus-visible:ring-orange-600',
    ghost: 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
  };
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return <motion.button ref={ref} whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={isLoading} {...props}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </motion.button>;
});
Button.displayName = 'Button';