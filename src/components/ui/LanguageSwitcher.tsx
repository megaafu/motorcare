'use client'

import { useState } from 'react'
import { Globe } from '../icons/Icons'

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('EN')

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleButtonClick}>
        <a
          href="#"
          className="flex items-center gap-2 text-lg text-light-text hover:text-primary"
        >
          <Globe />
          {selectedOption}
        </a>
      </button>
      {isOpen && (
        <div className="relative block">
          {selectedOption === 'PT' ? (
            <button
              className="absolute left-0 top-full z-10  rounded-xl border bg-white px-8 py-2 text-lg shadow-md shadow-black hover:text-primary"
              onClick={() => handleOptionClick('EN')}
            >
              EN
            </button>
          ) : (
            <button
              className="absolute left-0 top-[100%] z-10 rounded-xl border bg-white px-8 py-2 text-lg shadow-md shadow-black hover:text-primary"
              onClick={() => handleOptionClick('PT')}
            >
              PT
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
