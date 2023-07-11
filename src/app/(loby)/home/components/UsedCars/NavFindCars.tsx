'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { FindCarsMenu } from '@/constants/menuData'
import { useState } from 'react'
import CarsList from './CarsList'

const NavFindCars = () => {
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <>
      <Title.Root>
        <Title.Label label={FindCarsMenu.label} />
        <Title.Nav>
          {FindCarsMenu.subMenu.map((nav, index) => (
            <TitleNavItem
              key={nav}
              label={nav}
              isActive={selectedIndex === index}
              onClick={() => handleIndex(index)}
            />
          ))}
        </Title.Nav>
      </Title.Root>

      <CarsList />
      <SecundaryButton label="View More" />
    </>
  )
}

export default NavFindCars
