"use client"

import React, { useState } from 'react'
import { IBlog } from '@/core/model/blog'
import { BlogMenu } from '@/data/menuData'
import SubMenu from '@/components/SubMenu'
import SubMenuItem from '@/components/SubMenuItem'
import BlogList from './BlogList'


interface NavBlogsProps {
    blogs:IBlog[]
}

const NavBlogs:React.FC<NavBlogsProps> = ({blogs}) => {
    const [selectedIndex, setIndex] = useState(0);
    const handleIndex = (index: number) => {
        setIndex(index);
      };
    
    return (
      <>
        <SubMenu label={BlogMenu.label}>
            {BlogMenu.subMenu.map((nav, index) => (
                <SubMenuItem
                    key={nav}
                    label={nav}
                    isActive={selectedIndex === index}
                    onClick={() => handleIndex(index)}
                />
            ))}
                
        </SubMenu>   
        <BlogList blogs={blogs}/>
      </>
                

  )
}

export default NavBlogs