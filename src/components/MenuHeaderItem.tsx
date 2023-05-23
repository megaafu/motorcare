"use client"
import React, { useState } from 'react'
import MenuItem from './ui/MenuItem';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';

interface MenuItem {
    label: string;
    url: string;
  }
  


interface MenuProps {
    
    menu: MenuItem[];
  }
  
  const MenuHeaderItem: React.FC<MenuProps> = ({ menu }) => {
    const pathName = usePathname()
    const [selectedMenu, setSelectedMenu] = useState('');
  
    const handleMenu = (item: string) => {
      setSelectedMenu(item);
    };
  
    return (
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {menu.map(({ label, url }) => {
          const isActive = pathName === url;
          const menuItemClasses = classNames(
            'group',
            {
              'text-sky-700 after:text-sky-600': isActive,
              'text-gray-700 after:text-sky-600': !isActive,
            },
            'transition duration-300 md:text-md lg:text-lg'
          );
  
          return (
            <li key={label}>
              <Link href={url}>
                <div
                  onClick={() => handleMenu(label)}
                  className={menuItemClasses}
                >
                  {label}
                  {isActive && (
                    <span className="mt-1 block max-w-full h-0.5 bg-sky-600" />
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  

export default MenuHeaderItem