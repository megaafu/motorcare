'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import PagePadding from '@/components/ui/PagePadding'
import { BlogMenu } from '@/constants/menuData'
import { IBlog } from '@/model/blog'
import React, { useState } from 'react'
import BlogList from './BlogList'

interface NavBlogsProps {
  blogs: IBlog[]
}

const NavBlogs: React.FC<NavBlogsProps> = ({ blogs }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNavItemClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={BlogMenu.label} />
        <Title.Nav>
          {BlogMenu.subMenu.map((nav, index) => (
            <TitleNavItem
              key={nav}
              label={nav}
              isActive={activeIndex === index}
              onClick={() => handleNavItemClick(index)}
            />
          ))}
        </Title.Nav>
      </Title.Root>

      <BlogList blogs={blogs} />
    </PagePadding>
  )
}

export default NavBlogs
