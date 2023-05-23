import Link from 'next/link';
import React from 'react'

type SubMenuProps = {
    items:string[]
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
    return (
      <ul className="absolute mt-2 ml-0 bg-white border border-gray-200 rounded-md shadow-md z-10">
        {items.map((item) => (
          <li key={item} className="py-2 px-4">
            <Link href="#">
              <div className="text-gray-800 hover:text-sky-600">{item}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

export default SubMenu