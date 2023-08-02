'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const languageOptions = ['en','pt']

const LanguageSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState(languageOptions[1])
  
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }
  const pathName = usePathname()
  const locale = useLocale()
 
  return (
    <div>
      <div className="flex gap-2">
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
    </div>
  )
}

export default LanguageSwitcher
