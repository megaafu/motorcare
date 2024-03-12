'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const languageOptions = [{ label: 'Pt', link: 'pt' }, { label: 'En', link: 'en' }]

const LanguageSwitcher = () => {
  const pathName = usePathname()
  const locale = useLocale()
  const handleChangeLanguage = (newLocale: string) => {
    window.location.href = `${newLocale}${pathName.replace("/" + locale, "")}`
  }
  return (
    <div>
      <div className="flex gap-2 ">
        <div className="flex justify-evenly gap-5 border-light-text">
          {languageOptions.map((option) => (
            <button
              onClick={() => handleChangeLanguage(option.link)}
              key={option.link}
              className="flex gap-2 justify-center self-center text-sm text-light-text hover:text-primary"
            >
              <Image width={20} height={18} src={`/icons/${option.link}.png`} alt='' />
              {option.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}


export default LanguageSwitcher
