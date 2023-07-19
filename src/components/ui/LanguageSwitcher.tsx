'use client'
import { useState } from 'react'
import { Globe } from '../icons/Icons'

const languageOptions = [
  { code: 'EN', label: 'EN' },
  { code: 'PT', label: 'PT' },
]

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

  const DropdownOption = ({ option }: { option: string }) => (
    <button
      className="absolute left-0 top-full z-10 rounded-xl border bg-white px-8 py-2 text-lg shadow-md shadow-black hover:text-primary"
      onClick={() => handleOptionClick(option)}
    >
      {option}
    </button>
  )

  return (
    <div>
      <div className="flex gap-2 sm:hidden">
        <button
          className="text-lg text-light-text hover:text-primary"
          onClick={handleButtonClick}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Language Selector"
        >
          <Globe />
        </button>
        <div className="flex justify-evenly gap-5 border-light-text">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              className="text-lg text-light-text hover:text-primary"
              onClick={() => handleOptionClick(option.code)}
              aria-label={`Select ${option.label} Language`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="hidden flex-col sm:flex">
        <button onClick={handleButtonClick}>
          <a
            href="#"
            className="flex items-center gap-2 text-lg text-light-text hover:text-primary"
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-label="Language Selector"
          >
            <Globe />
            {selectedOption}
          </a>
        </button>
        {isOpen && (
          <div className="relative block">
            {languageOptions.map(
              (option) =>
                option.code !== selectedOption && (
                  <DropdownOption key={option.code} option={option.code} />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSwitcher
