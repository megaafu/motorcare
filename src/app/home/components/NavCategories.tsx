"use client"

import React, { useState } from 'react';
import PagePadding from '@/components/ui/PagePadding';
import { CategoriesMenu } from '@/data/menuData';
import SubMenu from '@/components/SubMenu';
import SubMenuItem from '@/components/SubMenuItem';
import CategoriesList from './CategoriesList';


const NavCategories= () => {
  const [filter, setFilter ] = useState('Vehicles')
  const [selectedIndex, setIndex] = useState(0);
  const handleIndex = (index: number) => {
      setIndex(index);
    };
  const hadleFilter=(filter:string)=>{
    setFilter(filter)
  }
  return (
    
      <PagePadding>
        <SubMenu label={CategoriesMenu.label}>
          {CategoriesMenu.subMenu.map((nav, index) => (
              <SubMenuItem
                key={nav}
                label={nav}
                isActive={selectedIndex === index}
                onClick={() => {
                  handleIndex(index)
                  hadleFilter(nav)
                }}
              />
            ))}
        </SubMenu>
        <CategoriesList filter={filter} />
      </PagePadding>
    
  );
};

export default NavCategories;
