'use client'

import LateralScroll from '@/components/ui/LateralScoll'
import Row from '@/components/ui/Row'
import SecundaryButton from '@/components/ui/SecundaryButton'
import VerticalScroll from '@/components/ui/VerticalScroll'
import useVehicles from '@/hooks/use-vehicles'
import { BASEURL } from '@/lib/util/util'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import BrochureItem from './BrochureItem'
import BrochureSkeletion from './BrochureSkeletion'

const BrochureList = () => {
  const { data, isLoading } = useVehicles()
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }
  const t = useTranslations("Home")
  return (
    <>
      { isLoading?<BrochureSkeletion />:data ? (
        <>
            <Row className="grid-col-1  gap-8 lg:h-[65vh] lg:grid-cols-3">
              <VerticalScroll className="hidden lg:flex">
                {data.map((car, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleIndex(index)}
                      className="flex cursor-pointer flex-col"
                    >
                      <Image
                        loader={() =>
                          `${BASEURL}${
                            JSON.parse(car.car_image)[0]
                          }`
                        }
                        width={1080}
                        height={1080}
                        className="max-w-xs aspect-[4/3]"
                        src={`${BASEURL}${
                          JSON.parse(car.car_image)[0]
                        }`}
                        alt=""
                      />
                    </div>
                  )
                })}
              </VerticalScroll>
              <LateralScroll className="col-span-1  lg:hidden">
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
            <SecundaryButton label={t('view_brochure')} />
        </>
      ) : null}
    </>
  )
}

export default BrochureList
