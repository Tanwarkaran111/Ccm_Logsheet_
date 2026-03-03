import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export interface CellProps {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  vertical?: boolean;
  header?: boolean;
  align?: 'left' | 'center' | 'right';
}