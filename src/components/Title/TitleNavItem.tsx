import React from 'react'
import { Link } from 'react-scroll'

interface TitleNavItemProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const TitleNavItem: React.FC<TitleNavItemProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <li className="flex ">
      <Link
        to={`${label}`}
        smooth={true}
        spy={true}
        offset={-70}
        duration={600}
        onClick={onClick}
        className={`group  cursor-pointer whitespace-nowrap rounded-full border-2 px-4 py-2 sm:border-none border-${
          isActive ? 'primary' : 'light-text'
        } text-${
          isActive ? 'primary' : 'light-text'
        } md:text-md transition duration-300 after:text-primary lg:text-lg`}
      >
        {label}
        <span
          className={`mt-1 hidden max-w-0 lg:block ${
            isActive ? 'max-w-full' : ''
          } h-0.5 bg-primary transition-all duration-500`}
        ></span>
      </Link>
    </li>
  )
}

export default TitleNavItem
