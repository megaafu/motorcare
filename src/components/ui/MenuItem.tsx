import React from 'react'

interface MenuItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  const MenuItem: React.FC<MenuItemProps> = ({ label, isActive, onClick }) => {
    return (
      <li>
        <button
          onClick={onClick}
          className={`group text-${isActive ? 'sky-700' : 'gray-700'} after:text-sky-600 transition duration-300 md:text-md lg:text-lg`}
        >
          {label}
          <span className={`mt-1 block max-w-0 ${isActive ? 'max-w-full' : ''} transition-all duration-500 h-0.5 bg-sky-600`}></span>
        </button>
      </li>
    );
  };

export default MenuItem