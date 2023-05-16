"use client"

import { useState } from 'react';

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
        <button className="dropdown-toggle md:text-md lg:text-lg" onClick={handleButtonClick}>
          {selectedOption}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {selectedOption === 'PT'? <button className="dropdown-option md:text-md lg:text-lg" onClick={() => handleOptionClick('EN')}>
              EN
            </button> : <button className="dropdown-option md:text-md lg:text-lg" onClick={() => handleOptionClick('PT')}>
              PT
            </button>}
            
            
          </div>
        )}
      </div>
    );
};

export default LanguageSwitcher;