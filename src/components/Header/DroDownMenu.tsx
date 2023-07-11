import Link from 'next/link'
import React from 'react'

type DroDownMenuProps = {
  items: string[]
}

const DroDownMenu: React.FC<DroDownMenuProps> = ({ items }) => {
  return (
    <ul className="absolute z-10 ml-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-md">
      {items.map((item) => (
        <li key={item} className="px-4 py-2">
          <Link href={`/about/#${item}`}>
            <div className="text-light-text transition duration-500 hover:scale-110 hover:text-primary">
              {item}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DroDownMenu
