import Link from 'next/link';
import React from 'react'

type DroDownMenuProps = {
    items:string[]
}

const DroDownMenu: React.FC<DroDownMenuProps> = ({ items }) => {
    return (
      <ul className="absolute w-48 mt-2 ml-0 bg-white border border-gray-200 rounded-md shadow-md z-10">
        {items.map((item) => (
          <li key={item} className="py-2 px-4">
            <Link href="#">
              <div className="text-light-text hover:text-primary">{item}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

export default DroDownMenu