import React from 'react';

export type HeaderVariant = 'primary' | 'secondary';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  variant?: HeaderVariant;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  variant = 'primary'
}) => {
  const variantClasses = {
    primary: {
      title: 'text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2',
      subtitle: 'mt-2 text-xl text-gray-600'
    },
    secondary: {
      title: 'text-2xl font-semibold text-gray-800',
      subtitle: 'mt-1 text-lg text-gray-600'
    }
  };

  return (
    <header className="mb-4">
      <h1 className={variantClasses[variant].title}>{title}</h1>
      {subtitle && (
        <p className={variantClasses[variant].subtitle}>{subtitle}</p>
      )}
    </header>
  );
};

export default Header;
