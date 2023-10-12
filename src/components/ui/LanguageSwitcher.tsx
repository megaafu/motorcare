'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const languageOptions = [{ label: 'Pt', link: 'pt' }, { label: 'En', link: 'en' }]

const LanguageSwitcher = () => {
  const pathName = usePathname()
  const locale = useLocale()

  return (
    <div>
      <div className="flex gap-2 ">
        <div className="flex justify-evenly gap-5 border-light-text">
          {languageOptions.map((option) => (
            <Link
              href={`${option.link}/${pathName.replace("/" + locale, "")}`}
              key={option.link}
              className="flex gap-2 justify-center self-center text-sm text-light-text hover:text-primary"
            >
              <Image width={20} height={18} src={`/icons/${option.link}.png`} alt='' />
              {option.label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
/*
const [selectedOption, setSelectedOption] = useState(locale)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)

  }

   const [isOpen, setIsOpen] = useState(false)
    setIsOpen(false)
  const handleButtonClick = () => {

    setIsOpen(!isOpen)
  }



  const DropdownOption = ({ option }: { option: string }) => (
    <Link
      href={`${option}/${pathName.replace("/" + locale, "")}`}
      className="absolute left-0 right-0 w-24 top-full z-10 bg-white py-3 text-sm  hover:text-primary"
      onClick={() => handleOptionClick(option)}
    >
      <div className='flex justify-start gap-2'>
        <Image width={20} height={20} src={`/icons/${option}.png`} alt='' />
        {option}
      </div>
    </Link>
  )



<div className="hidden flex-col ">
        <button className='flex items-center gap-2 text-sm text-light-text hover:text-primary' onClick={handleButtonClick}>

          <Image width={20} height={20} src={`/icons/${selectedOption}.png`} alt='' />
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

*/

export default LanguageSwitcher
