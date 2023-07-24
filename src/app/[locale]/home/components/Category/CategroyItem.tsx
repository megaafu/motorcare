import { BASEURL } from '@/lib/util'
import { ICar } from '@/model/Car'
import Image from 'next/image'
import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface CarItemProps {
  carIndex: number
  car: ICar
}

const CategoryItem: React.FC<CarItemProps> = ({ carIndex, car }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div key={carIndex} className="flex">
      <a href="#">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w- group relative h-[30vh] w-[75vw] lg:h-72 lg:w-80"
        >
          <Image
            loader={() =>
              `${BASEURL}${JSON.parse(car.car_image)[0]}`
            }
            width={1080}
            height={1080}
            className=" h-3/4 w-full transform-gpu transition-transform group-hover:scale-105 lg:h-64 lg:w-80"
            src={`${BASEURL}${car.car_image[0]}`}
            alt=""
          />
          
          <p className="text-bold mt-4 text-2xl">{car.model}</p>
          {isHovered && (
            <div className="absolute bottom-0 left-0 right-0 hidden space-y-2 bg-transparent  group-hover:block">
              <a
                href="#"
                className="block  bg-gray-300 p-2 text-center duration-300 hover:bg-primary hover:text-white"
              >
                EXPLORE
              </a>
              <a
                href="#"
                className="block  bg-gray-300 p-2 text-center duration-300 hover:bg-primary hover:text-white"
              >
                BOOK A TEST DRIVE
              </a>
              <a
                href="#"
                className="block  bg-gray-300 p-2 text-center duration-300 hover:bg-primary hover:text-white"
              >
                REQUEST A QUOTE
              </a>
              <a
                href="#"
                className="block  bg-gray-300 p-2 text-center duration-300 hover:bg-primary hover:text-white"
              >
                MORE INFO
              </a>
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export default CategoryItem
