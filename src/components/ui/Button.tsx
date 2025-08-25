import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md focus:ring-blue-500',
      secondary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md focus:ring-emerald-500',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
      ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const combinedClassName = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(combinedClassName, children.props.className),
        ...props,
      });
    }

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;