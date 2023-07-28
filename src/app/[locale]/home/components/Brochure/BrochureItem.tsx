'use client'
import { Download } from '@/components/icons/Icons'
import { BASEURL } from '@/lib/util/util'
import { ICar } from '@/model/Car'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

type BrochureItemProps = {
  car: ICar
}
const BrochureItem: React.FC<BrochureItemProps> = ({ car }) => {
  const images: string[] = JSON.parse(car.car_image)
  const t = useTranslations("Home")
  return (
    <div id={car.id} className="flex flex-col justify-between h-[45vh]  lg:h-[65vh]">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showIndicators={true}
        showArrows={false}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        interval={3000}
        transitionTime={3000}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              loader={() => `${BASEURL}${image}`}
              width={1080}
              height={1080}
              src={`${BASEURL}${image}`}
              alt={`Image ${index}`}
              className="h-[40vh]  rounded-t-lg lg:h-[60vh]"
            />
          </div>
        ))}
      </Carousel>
        <div className="flex justify-end lg:justify-between">
          <p className="hidden lg:flex lg:text-4xl">{`${car.brand} ${car.model}`}</p>
          <div>
            <Link
              target="_blank"
              href={`${BASEURL}${car.brochura}`}
              className="flex gap-2 transition duration-300 hover:text-secundary"
            >
              <span className="text-md md:text-xl xl:text-2xl">
                {t('download')}
              </span>
              <Download className="mt-1 h-4 w-4 lg:h-6 lg:w-6" />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default BrochureItem
