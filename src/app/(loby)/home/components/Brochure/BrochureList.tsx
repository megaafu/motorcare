'use client'

import ContentPadding from '@/components/ui/ContentPadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { Cars } from '@/constants/cars'
import Image from 'next/image'
import { useState } from 'react'
import BrochureItem from './BrochureItem'

const BrochureList = () => {
  // const [cars, setCars] = useState<ICar[]>([])

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       const getAllCarsUseCase: IGetAllCarsUseCase = new GetAllCarsUseCase()
  //       const carsData = await getAllCarsUseCase.execute()
  //       setCars(carsData)
  //     } catch (error) {
  //       // Handle error
  //     }
  //   }

  //   fetchCars()
  // }, [])
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <ContentPadding>
      <div className="grid h-[640px] grid-cols-3 gap-8">
        <div className="flex flex-col justify-between overflow-y-hidden hover:overflow-y-auto">
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
        <div className="col-span-2 ">
          {Cars.cars.length > 0 && (
            <BrochureItem car={Cars.cars[selectedIndex]} />
          )}
        </div>
      </div>
      <SecundaryButton label="View More" />
    </ContentPadding>
  )
}

export default BrochureList
