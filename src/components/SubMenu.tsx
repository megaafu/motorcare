"use client"

import React, { ReactNode } from 'react';
import Divider from './ui/Divider';
interface SubMenuProps {
  label:string
  children?:ReactNode
}

const SubMenu: React.FC<SubMenuProps> = ({label, children }) => {

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <p className="text-3xl text-primary">{label}</p>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {children}
          </ul>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default SubMenu;
