'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import LateralScroll from '@/components/ui/LateralScolling'
import PagePadding from '@/components/ui/PagePadding'
import Paragraph from '@/components/ui/Paragraph'
import Row from '@/components/ui/Row'
import { BrandsMenu } from '@/constants/menuData'
import Image from 'next/image'
import { useState } from 'react'
import { AllBrands } from '../constants/brands'

const NavBrands = () => {
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }
  return (
    <PagePadding>
      <div id="Our Brands">
        <Title.Root>
          <Title.Label label={BrandsMenu.label} />
          <LateralScroll>
            {AllBrands.brands.map((nav, index) => (
              <TitleNavItem
                key={nav.id}
                label={nav.brand}
                isActive={selectedIndex === nav.id}
                onClick={() => handleIndex(nav.id)}
              />
            ))}
          </LateralScroll>
        </Title.Root>
        <Row className="sm:grid-cols-2">
          <div className="">
            <h4 className="text-bold pb-4 text-2xl text-sky-700">
              {AllBrands.brands[selectedIndex].brand}
            </h4>
            <Paragraph>{AllBrands.brands[selectedIndex].info}</Paragraph>
          </div>
          <div className="flex w-full items-center justify-center ">
            <Image
              width={1000}
              height={1000}
              className="w-[280px]"
              src={AllBrands.brands[selectedIndex].img}
              alt="img"
            />
          </div>
        </Row>
      </div>
    </PagePadding>
  )
}

export default NavBrands
