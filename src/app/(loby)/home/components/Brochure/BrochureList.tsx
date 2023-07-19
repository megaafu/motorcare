'use client'

import LateralScroll from '@/components/ui/LateralScolling'
import PagePadding from '@/components/ui/PagePadding'
import Row from '@/components/ui/Row'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { Cars } from '@/constants/cars'
import Image from 'next/image'
import { useState } from 'react'
import BrochureItem from './BrochureItem'

const BrochureList = () => {
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <PagePadding>
      <Row className="grid-col-1  gap-8 lg:h-[640px] lg:grid-cols-3">
        <div className="hidden flex-col justify-between overflow-y-hidden hover:overflow-y-auto lg:flex">
          {Cars.cars.map((car, index) => (
            <div
              key={index}
              onClick={() => handleIndex(index)}
              className="flex cursor-pointer flex-col"
            >
              <Image
                width={1080}
                height={1080}
                className="max-w-xs"
                src={car.imageUrl[0]}
                alt=""
              />
            </div>
          ))}
        </div>
        <LateralScroll className="col-span-2  sm:hidden">
          {Cars.cars.map((car, index) => (
            <div
              key={index}
              onClick={() => handleIndex(index)}
              className={`cursor-pointer whitespace-nowrap rounded-full border-2 px-4 py-2 border-${
                index === selectedIndex ? 'primary' : 'light-text'
              }`}
            >
              {car.carname}
            </div>
          ))}
        </LateralScroll>
        <div className="col-span-2">
          {Cars.cars.length > 0 && (
            <BrochureItem car={Cars.cars[selectedIndex]} />
          )}
        </div>
      </Row>
      <SecundaryButton label="View More Brochures" />
    </PagePadding>
  )
}

export default BrochureList
