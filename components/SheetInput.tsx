import React from 'react';
import { InputProps } from '../types';

export const SheetInput: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      type="text"
      className={`w-full h-full bg-transparent px-1 py-0.5 outline-none text-blue-900 font-medium text-center focus:bg-blue-50 ${className}`}
      spellCheck={false}
      {...props}
    />
  );
};
