'use client'
import classNames from 'classnames'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ArrowDown } from '../icons/Icons'
import DroDownMenu from './DroDownMenu'

interface MenuItem {
  label: string
  url: string
  subMenu: string[]
 
}

interface MenuProps {
  menu: MenuItem[]
  
}

const MenuHeaderItem: React.FC<MenuProps> = ({ menu}) => {
 
  const pathName = usePathname()
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(-1)

  const handleArrowClick = (index: number) => {
    setSelectedMenuIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }
  const t= useTranslations('Header')
  const locale = useLocale()
  
  return (
    <ul className="relative mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
      {menu.map(({ label, url, subMenu }, index) => {
        const isActive = pathName === "/"+locale+url
        const hasSubMenu = subMenu.length > 0
        const menuItemClasses = classNames(
          'group',
          {
            'text-primary after:text-primary': isActive,
            'text-light-text after:text-light-text hover:text-primary':
              !isActive,
          },
          'transition duration-300 ease-in-out md:text-md lg:text-lg',
        )

        return (
          <li key={label} className="group relative">
            {hasSubMenu ? (
              <div className={menuItemClasses}>
                <span className="mr-4 cursor-pointer">
                  <Link onClick={() => handleArrowClick(-1)} href={`${locale}${url}`}>
                    {t(label)}
                  </Link>
                </span>
                {isActive && (
                  <span className="mt-1 block h-0.5 max-w-full bg-primary" />
                )}
                <span
                  className={`absolute -right-2 top-2 cursor-pointer  `}
                  onClick={() => handleArrowClick(index)}
                >
                  <ArrowDown
                    className={
                      selectedMenuIndex === index
                        ? 'h-3 w-3 rotate-0'
                        : 'h-3 w-3'
                    }
                  />
                </span>
              </div>
            ) : (
              <Link href={`${locale}${url}`} onClick={() => handleArrowClick(-1)}>
                <div className={menuItemClasses}>
                  <span className="mr-4 cursor-pointer">{t(label)}</span>
                  {isActive && (
                    <span className="mt-1 block h-0.5 max-w-full bg-primary" />
                  )}
                </div>
              </Link>
            )}
            {selectedMenuIndex === index && hasSubMenu && (
              <div className="absolute left-0 top-full z-10">
                <DroDownMenu items={subMenu} />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default MenuHeaderItem
