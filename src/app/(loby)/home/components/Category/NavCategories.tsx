'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import PagePadding from '@/components/ui/PagePadding'
import { CategoriesMenu } from '@/constants/menuData'
import { useState } from 'react'
import CategoriesList from './CategoriesList'

const NavCategories = () => {
  const [filter, setFilter] = useState('Vehicles')
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }
  const hadleFilter = (filter: string) => {
    setFilter(filter)
  }
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={CategoriesMenu.label}></Title.Label>
        <Title.Nav>
          {CategoriesMenu.subMenu.map((nav, index) => (
            <TitleNavItem
              key={nav}
              label={nav}
              isActive={selectedIndex === index}
              onClick={() => {
                handleIndex(index)
                hadleFilter(nav)
              }}
            />
          ))}
        </Title.Nav>
      </Title.Root>
      <CategoriesList filter={filter} />
    </PagePadding>
  )
}

export default NavCategories
