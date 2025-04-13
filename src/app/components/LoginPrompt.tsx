// components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', asChild, ...props }, ref) => {
    const classNames = {
      default: 'bg-blue-500 text-white',
      primary: 'bg-green-500 text-white',
      secondary: 'bg-gray-500 text-white',
    };

    const buttonClass = classNames[variant] || classNames.default;

    if (asChild) {
      return <>{children}</>;
    }

    return (
      <button ref={ref} className={`p-2 rounded ${buttonClass}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
