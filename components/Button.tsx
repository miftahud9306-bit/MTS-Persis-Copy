import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-[#159466] text-white focus:ring-brand-primary shadow-md hover:shadow-lg",
    secondary: "bg-brand-gold hover:bg-[#e0b120] text-brand-dark focus:ring-brand-gold shadow-md",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};