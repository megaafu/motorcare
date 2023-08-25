'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const languageOptions = ['en','pt']

const LanguageSwitcher = () => {
  const pathName = usePathname()
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(locale)
  
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  const handleButtonClick = () => {
    
    setIsOpen(!isOpen)
  }
  
 
 
  const DropdownOption = ({ option }: { option: string }) => (
    <Link
      href={`${option}/${pathName.replace("/"+locale, "")}`}
      className="absolute left-0 right-0 w-24 top-full z-10 bg-white py-3 text-lg  hover:text-primary"
      onClick={() => handleOptionClick(option)}
    >
      <div className='flex justify-start gap-2'>
        <Image width={30} height={30} src={`/icons/${option}.png`} alt=''/>
        {option}
      </div>
    </Link>
  )

  return (
    <div>
      <div className="flex gap-2 lg:hidden">
        <div className="flex justify-evenly gap-5 border-light-text">
          {languageOptions.map((option) => (
            <Link
              href={`${option}/${pathName.replace("/"+locale, "")}`}
              key={option}
              className="flex gap-2 justify-center self-center text-lg text-light-text hover:text-primary"
            >
              <Image width={30} height={30} src={`/icons/${option}.png`} alt=''/>
              {option}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden flex-col lg:flex">
        <button className='flex items-center gap-2 text-lg text-light-text hover:text-primary' onClick={handleButtonClick}>
         
            <Image width={30} height={30} src={`/icons/${selectedOption}.png`} alt=''/>
            {selectedOption}

        </button>
        {isOpen && (
          <div className="relative">
            {languageOptions.map(
              (option) =>
                option !== selectedOption && (
                  <DropdownOption key={option} option={option} />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSwitcher
