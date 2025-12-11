import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'teal' | 'stone';
  className?: string;
}
export function Badge({
  children,
  variant = 'orange',
  className = ''
}: BadgeProps) {
  const variants = {
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    teal: 'bg-teal-100 text-teal-800 border-teal-200',
    stone: 'bg-stone-100 text-stone-800 border-stone-200'
  };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </span>;
}