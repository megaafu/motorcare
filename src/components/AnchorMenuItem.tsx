import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

interface AnchorMenuItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  const AnchorMenuItemProps: React.FC<AnchorMenuItemProps> = ({ label, isActive, onClick }) => {
    return (
      <li>
        <Link 
          to={`${label}`}
          smooth={true}
          spy={true}
          offset={-70}
          duration={600}
          onClick={onClick}
          className={`cursor-pointer group text-${isActive ? 'primary' : 'light-text'} after:text-primary transition duration-300 md:text-md lg:text-lg`}
        >
          {label}
          <span className={`mt-1 block max-w-0 ${isActive ? 'max-w-full' : ''} transition-all duration-500 h-0.5 bg-primary`}></span>
        </Link>
      </li>
    );
  };

export default AnchorMenuItemProps