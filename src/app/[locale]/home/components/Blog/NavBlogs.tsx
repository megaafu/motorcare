'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import PagePadding from '@/components/ui/PagePadding'
import { BlogMenu } from '@/constants/menuData'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import BlogList from './BlogList'

const NavBlogs = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNavItemClick = (index: number) => {
    setActiveIndex(index)
  }
  const t = useTranslations("Home")
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={t(BlogMenu.label)} />
        <Title.Nav>
          {BlogMenu.subMenu.map((nav, index) => (
            <TitleNavItem
              key={nav}
              label={t(nav)}
              isActive={activeIndex === index}
              onClick={() => handleNavItemClick(index)}
            />
          ))}
        </Title.Nav>
      </Title.Root>

      <BlogList />
    </PagePadding>
  )
}

export default NavBlogs
