import React, { forwardRef, useId } from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className = '',
  label,
  error,
  id,
  ...props
}, ref) => {
  const inputId = id || useId();
  return <div className="w-full space-y-2">
        {label && <label htmlFor={inputId} className="text-sm font-medium text-stone-700">
            {label}
          </label>}
        <input id={inputId} ref={ref} className={`flex h-12 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500 focus-visible:ring-red-500' : ''} ${className}`} {...props} />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>;
});
Input.displayName = 'Input';