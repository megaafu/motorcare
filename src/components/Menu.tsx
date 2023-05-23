"use client"

import React, { useState } from 'react';
import Divider from './ui/Divider';
import MenuItem from './ui/MenuItem';



interface MenuProps {
  title: string;
  navigation: string[];
}

const Menu: React.FC<MenuProps> = ({ title, navigation }) => {
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(0);

  const handleMenuItemClick = (index: number) => {
    setSelectedMenuItemIndex(index);
  };

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <p className="text-3xl text-sky-700">{title}</p>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navigation.map((nav, index) => (
              <MenuItem
                key={nav}
                label={nav}
                isActive={selectedMenuItemIndex === index}
                onClick={() => handleMenuItemClick(index)}
              />
            ))}
          </ul>
        </div>
      </div>
      <Divider />
    </header>
  );
};

export default Menu;
