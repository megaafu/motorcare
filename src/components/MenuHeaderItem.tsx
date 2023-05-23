"use client"

import React, { useState, useRef, useEffect } from 'react';
import MenuItem from './ui/MenuItem';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';
import SubMenu from './SubMenu';

interface MenuItem {
  label: string;
  url: string;
  subMenu: string[];
}

interface MenuProps {
  menu: MenuItem[];
}



const MenuHeaderItem: React.FC<MenuProps> = ({ menu }) => {
  const pathName = usePathname();
  const [selectedMenu, setSelectedMenu] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const subMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);



  const handleMouseEnter = (item: string) => {
    setSelectedMenu(item);
    setShowSubMenu(true);
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current);
      subMenuTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    subMenuTimeoutRef.current = setTimeout(() => {
      setSelectedMenu('');
      setShowSubMenu(false);
    }, 500); // Adjust the delay as needed (in milliseconds)
  };

  useEffect(() => {
    return () => {
      if (subMenuTimeoutRef.current) {
        clearTimeout(subMenuTimeoutRef.current);
        subMenuTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <ul className="relative flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      {menu.map(({ label, url, subMenu }) => {
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
          <li
            key={label}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={url}>
              <div className={menuItemClasses}>
                {label}
                {isActive && (
                  <span className="mt-1 block max-w-full h-0.5 bg-sky-600" />
                )}
              </div>
            </Link>
            {selectedMenu === label && showSubMenu && (
              <div
                className="absolute top-full left-0 z-10"
                onMouseEnter={() => handleMouseEnter(label)} // Keep sub-menu open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                <SubMenu items={subMenu} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuHeaderItem
