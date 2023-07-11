/* eslint-disable no-undef */
'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { clearTimeout, setTimeout } from 'timers'
import DroDownMenu from './DroDownMenu'

interface MenuItem {
  label: string
  url: string
  subMenu: string[]
}

interface MenuProps {
  menu: MenuItem[]
}

const MenuHeaderItem: React.FC<MenuProps> = ({ menu }) => {
  const pathName = usePathname()
  const [selectedMenu, setSelectedMenu] = useState(menu[0].label)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const subMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (item: string) => {
    setSelectedMenu(item)
    setShowSubMenu(true)
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current)
      subMenuTimeoutRef.current = null
    }
  }

  const handleMouseLeave = () => {
    subMenuTimeoutRef.current = setTimeout(() => {
      setSelectedMenu('')
      setShowSubMenu(false)
    }, 1000)
  }

  return (
    <ul className="relative mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
      {menu.map(({ label, url, subMenu }) => {
        const isActive = pathName === url
        const menuItemClasses = classNames(
          'group',
          {
            'text-primary after:text-primary': isActive,
            'text-light-text after:text-light-text hover:text-primary':
              !isActive,
          },
          'transition duration-500 md:text-md lg:text-lg',
        )

        return (
          <li
            key={label}
            className="group relative "
            onMouseEnter={() => handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={url}>
              <div className={menuItemClasses}>
                {label}
                {isActive && (
                  <span className="mt-1 block h-0.5 max-w-full bg-primary" />
                )}
              </div>
            </Link>
            {selectedMenu === label && showSubMenu && (
              <div
                className="absolute left-0 top-full z-10 "
                onMouseEnter={() => handleMouseEnter(label)} // Keep sub-menu open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                {subMenu.length > 0 ? <DroDownMenu items={subMenu} /> : null}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default MenuHeaderItem
