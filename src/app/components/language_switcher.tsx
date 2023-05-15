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
        <button className="dropdown-toggle" onClick={handleButtonClick}>
          {selectedOption}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {selectedOption === 'PT'? <button className="dropdown-option" onClick={() => handleOptionClick('EN')}>
              EN
            </button> : <button className="dropdown-option" onClick={() => handleOptionClick('PT')}>
              PT
            </button>}
            
            
          </div>
        )}
      </div>
    );
};

export default LanguageSwitcher;