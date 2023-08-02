'use client'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { Cancel, MenuIcon } from '../icons/Icons'
import LanguageSwitcher from '../ui/LanguageSwitcher'

interface MenuItem {
  label: string
  url: string
}

interface MenuProps {
  menu: MenuItem[]
}

const MobileMenu = ({ menu }: MenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1)

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  const handleMenuToggle = () => {
    setMenuOpen((prevIsOpen) => !prevIsOpen)
    setOpenSubMenuIndex(-1)
  }
  const t= useTranslations('Header')
  const locale = useLocale()
  return (
    <>
      <div className="z-10" onClick={handleMenuToggle}>
        {isMenuOpen ? <Cancel /> : <MenuIcon />}
      </div>
      <div
        className={`${
          isMenuOpen
            ? 'absolute bottom-0 left-[35%] right-0 top-0'
            : 'absolute bottom-0 left-[100%] right-[-100%] top-0'
        } flex h-screen flex-col justify-center gap-5 border bg-white px-4 shadow-xl duration-500 ease-in`}
      >
        {menu.map(({ label, url, }, index) => (
          <div className="relative" key={index}>
            <div className="flex justify-between text-xl font-bold">
              <Link href={`${locale}${url}`} onClick={handleMenuToggle}>
                {t(label)}
              </Link>
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>
    </>
  )
}

export default MobileMenu
