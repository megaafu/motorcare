'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import { BlogMenu } from '@/constants/menuData'
import { IBlog } from '@/model/blog'
import React, { useState } from 'react'
import BlogList from './BlogList'

interface NavBlogsProps {
  blogs: IBlog[]
}

const NavBlogs: React.FC<NavBlogsProps> = ({ blogs }) => {
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <>
      <Title.Root>
        <Title.Label label={BlogMenu.label} />
        <Title.Nav>
          {BlogMenu.subMenu.map((nav, index) => (
            <TitleNavItem
              key={nav}
              label={nav}
              isActive={selectedIndex === index}
              onClick={() => handleIndex(index)}
            />
          ))}
        </Title.Nav>
      </Title.Root>

      <BlogList blogs={blogs} />
    </>
  )
}

export default NavBlogs
