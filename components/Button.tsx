import React from 'react';
import { COMPANY_INFO } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  isWhatsApp?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon, 
  className = '',
  isWhatsApp = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-[900] uppercase tracking-tighter transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-brand-green text-brand-black hover:bg-brand-black hover:text-brand-green border-brand-black",
    secondary: "bg-brand-black text-brand-green hover:bg-brand-green hover:text-brand-black border-brand-black",
    outline: "bg-transparent text-brand-black border-brand-black hover:bg-brand-black hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isWhatsApp) {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, vim pelo site e gostaria de fazer um orçamento.`, '_blank');
    }
    if (props.onClick) props.onClick(e);
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </button>
  );
};