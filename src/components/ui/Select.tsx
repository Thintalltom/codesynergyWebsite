import React, { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  className = '',
  label,
  error,
  options,
  id,
  ...props
}, ref) => {
  const selectId = id || useId();
  return <div className="w-full space-y-2">
        {label && <label htmlFor={selectId} className="text-sm font-medium text-stone-700">
            {label}
          </label>}
        <div className="relative">
          <select id={selectId} ref={ref} className={`flex h-12 w-full appearance-none rounded-lg border border-stone-300 bg-white px-3 py-2 pr-10 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500 focus-visible:ring-red-500' : ''} ${className}`} {...props}>
            <option value="" disabled>
              Select an option
            </option>
            {options.map(opt => <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>)}
          </select>
          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-stone-400 pointer-events-none" />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>;
});
Select.displayName = 'Select';