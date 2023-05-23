"use client"

import { useState } from 'react';
import { Globe } from '../icons/Icons';



const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('PT');
  
    const handleButtonClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleButtonClick}>
          <a href="#" className='flex gap-2 items-center text-lg hover:text-sky-600'>
            <Globe/>
            {selectedOption}
          </a>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {selectedOption === 'PT'? <button className="dropdown-option text-lg" onClick={() => handleOptionClick('EN')}>
              EN
            </button> : <button className="dropdown-option text-lg" onClick={() => handleOptionClick('PT')}>
              PT
            </button>}
          </div>
        )}
      </div>
    );
};

export default LanguageSwitcher;