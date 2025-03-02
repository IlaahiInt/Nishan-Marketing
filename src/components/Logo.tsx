import React from 'react';
import logoDark from '../assets/images/dark-logo.png';
import logoLight from '../assets/images/white-logo.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = 'h-10 w-auto' }) => {
  return (
    <img 
      src={variant === 'dark' ? logoDark : logoLight}
      alt="Nishan Marketing" 
      className={className}
    />
  );
};

export default Logo; 