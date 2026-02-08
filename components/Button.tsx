import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-bold uppercase tracking-wide transition-all duration-300 rounded-full shadow-[0_4px_0_rgba(0,0,0,0.15)] active:translate-y-1 active:shadow-none focus:outline-none focus:ring-4";
  
  const variants = {
    primary: "bg-brand-green hover:bg-green-600 text-white focus:ring-brand-green/50",
    secondary: "bg-white text-brand-blue hover:bg-gray-50 focus:ring-white/50",
    outline: "border-2 border-white text-white hover:bg-white/10 focus:ring-white/50 shadow-none",
    danger: "bg-brand-red text-white hover:bg-red-600 focus:ring-red-300"
  };

  // Safe type casting for dynamic class assignment if needed, 
  // though here we map specific props to specific Tailwind strings.
  const variantClass = variant === 'primary' ? variants.primary : variant === 'secondary' ? variants.secondary : variants.outline;

  const sizeStyles = "text-sm sm:text-base py-4 px-8 sm:px-10";

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variantClass} 
        ${sizeStyles} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {withIcon && <ArrowRight className="w-5 h-5" />}
      </span>
    </button>
  );
};