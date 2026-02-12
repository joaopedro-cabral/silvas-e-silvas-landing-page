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
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 border border-transparent",
    secondary: "bg-[#25D366] text-white hover:bg-green-600 border border-transparent",
    outline: "bg-transparent text-white border-2 border-white/20 hover:border-white hover:bg-white hover:text-brand-dark"
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
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};