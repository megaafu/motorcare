'use client'

import LateralScroll from '@/components/ui/LateralScolling'
import Row from '@/components/ui/Row'
import SecundaryButton from '@/components/ui/SecundaryButton'
import useVehicles from '@/hooks/use-vehicles'
import Image from 'next/image'
import { useState } from 'react'
import BrochureItem from './BrochureItem'

const BrochureList = () => {
  const { data } = useVehicles()
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }
  return (
    <>
      {data ? (
        <>
            <Row className="grid-col-1  gap-8 lg:h-[640px] lg:grid-cols-3">
              <div className="hidden flex-col justify-between overflow-y-hidden hover:overflow-y-auto lg:flex">
                {data.map((car, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleIndex(index)}
                      className="flex cursor-pointer flex-col"
                    >
                      <Image
                        loader={() =>
                          `http://localhost:8000/${
                            JSON.parse(car.car_image)[0]
                          }`
                        }
                        width={1080}
                        height={1080}
                        className="max-w-xs"
                        src={`http://localhost:8000/${
                          JSON.parse(car.car_image)[0]
                        }`}
                        alt=""
                      />
                    </div>
                  )
                })}
              </div>
              <LateralScroll className="col-span-2  sm:hidden">
                {data.map((car, index) => (
                  <div
                    key={index}
                    onClick={() => handleIndex(index)}
                    className={`cursor-pointer whitespace-nowrap rounded-full border-2 px-4 py-2 border-${
                      index === selectedIndex ? 'primary' : 'light-text'
                    }`}
                  >
                    {`${car.brand} ${car.model}`}
                  </div>
                ))}
              </LateralScroll>
              <div className="col-span-2">
                {data.length > 0 && <BrochureItem car={data[selectedIndex]} />}
              </div>
            </Row>
            <SecundaryButton label="View More Brochures" />
        </>
      ) : null}
    </>
  )
}

export default BrochureList
