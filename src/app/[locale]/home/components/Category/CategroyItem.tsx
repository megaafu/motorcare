import { BASEURL } from '@/lib/util/util'
import { ICar } from '@/model/Car'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface CarItemProps {
  carIndex: number
  car: ICar
}

const CategoryItem: React.FC<CarItemProps> = ({ carIndex, car }) => {
  const t = useTranslations("Home")
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div key={carIndex}>
      <a href="#">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" group relative h-[40vh] w-[75vw] aspect-[4/3] md:w-[50vw] lg:h-auto lg:w-auto pb-12"
        >
          <Image
            loader={() =>
              `${BASEURL}${JSON.parse(car.car_image)[0]}`
            }
            width={6048}
            height={4024}
            className=" aspect-[4/3] w-full transform-gpu transition-transform group-hover:scale-110"
            src={`${BASEURL}${car.car_image[0]}`}
            alt=""
          />

          <p className="text-bold mt-4 text-xl text-center">{car.model}</p>
          {isHovered && (
            <>

              <div className="absolute bottom-0 left-0 right-0  hidden space-y-2 bg-transparent  group-hover:block">
                <a
                  href="#"
                  className="block p-2 text-center duration-300 bg-primary text-white"
                >
                  {t("explore")}
                </a>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 border border-primary'></div>
            </>
          )}
        </div>
      </a>
    </div>
  )
}

export default CategoryItem
