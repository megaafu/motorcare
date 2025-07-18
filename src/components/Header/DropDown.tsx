'use client'

import { IMenu, IMenuWithSub } from '@/constants/headerData'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowDown } from '../icons/Icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface DropDownProps {
  label: string
  dropdown: IMenuWithSub[]
}

const DropDown = ({ label, dropdown }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Header')
  const locale = useLocale()

  return (
    <div
      className="relative group text-light-text text-sm"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer flex items-center gap-1">
        {t(label)}
        <ArrowDown className="w-3 h-3 mt-1 transition-transform duration-300 group-hover:rotate-[2deg]" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 z-50 w-48 bg-white rounded-md shadow-lg py-2"
          >
            {dropdown.map((item) =>
              item.dropdown ? (
                <SubDropdown key={item.label} label={item.label} dropdown={item.dropdown} />
              ) :
                <li key={item.label}>
                  <Link
                    href={`${locale}${item.url}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {t(item.label)}
                  </Link>
                </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

interface SubDropdownProps {
  label: string
  dropdown: IMenu[]
}

const SubDropdown = ({ label, dropdown }: SubDropdownProps) => {
  const [isSubOpen, setIsSubOpen] = useState(false)
  const t = useTranslations('Header')
  const locale = useLocale()

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        {t(label)}
        <ArrowDown className="w-3 h-3 " />
      </div>

      <AnimatePresence>
        {isSubOpen && (
          <motion.ul
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg py-2 z-50"
          >
            {dropdown.map((item) => (
              <li key={item.label}>
                {item.label == "nissan" ? (<a
                  target="_blank"
                  href={`${item.url}`}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {t(item.label)}
                </a>
                ) : (<Link
                  href={`${locale}${item.url}`}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {t(item.label)}
                </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default DropDown

