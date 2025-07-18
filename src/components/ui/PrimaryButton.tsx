import React from 'react';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={`
        relative
        font-bold
        font-sans
        tracking-wide
        text-white
        border-none
        rounded-full
        transition-all
        duration-300
        ease-out
        overflow-hidden
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, #CBB49A 0%, #433838 100%)',
        backgroundSize: '200% 200%',
        boxShadow: '0 4px 12px rgba(203, 180, 154, 0.3)',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundPosition = '100% 100%';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundPosition = '0% 0%';
        }
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-[#433838]/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default PrimaryButton; 