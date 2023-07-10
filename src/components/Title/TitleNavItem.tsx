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
    <li>
      <Link
        to={`${label}`}
        smooth={true}
        spy={true}
        offset={-70}
        duration={600}
        onClick={onClick}
        className={`group cursor-pointer text-${
          isActive ? 'primary' : 'light-text'
        } md:text-md transition duration-300 after:text-primary lg:text-lg`}
      >
        {label}
        <span
          className={`mt-1 block max-w-0 ${
            isActive ? 'max-w-full' : ''
          } h-0.5 bg-primary transition-all duration-500`}
        ></span>
      </Link>
    </li>
  )
}

export default TitleNavItem
