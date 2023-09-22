'use client'
import classNames from 'classnames'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

interface MenuItem {
  label: string
  url: string
 
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
      {menu.map(({ label, url, }) => {
        const isActive = pathName === "/"+locale+url
        const menuItemClasses = classNames(
          'group',
          {
            'text-primary after:text-primary': isActive,
            'text-light-text after:text-light-text hover:text-primary':
              !isActive,
          },
          'transition duration-300 ease-in-out text-sm',
        )

        return (
          <li key={label} className="group relative">
              <Link href={`${locale}${url}`} onClick={() => handleArrowClick(-1)}>
                <div className={menuItemClasses}>
                  <span className="mr-4 cursor-pointer">{t(label)}</span>
                  {isActive && (
                    <span className="mt-1 block h-0.5 max-w-full bg-primary" />
                  )}
                </div>
              </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuHeaderItem
