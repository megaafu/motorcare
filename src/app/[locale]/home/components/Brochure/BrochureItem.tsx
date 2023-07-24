import { Download } from '@/components/icons/Icons'
import { ICar } from '@/model/Car'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

type BrochureItemProps = {
  car: ICar
}
const BrochureItem: React.FC<BrochureItemProps> = ({ car }) => {
  const images: string[] = JSON.parse(car.car_image)

  return (
    <div id={car.id} className="relative h-[44vh] lg:h-[65vh]">
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
              loader={() => `http://localhost:8000/${image}`}
              width={1080}
              height={1080}
              src={`http://localhost:8000/${image}`}
              alt={`Image ${index}`}
              className="h-[40vh] rounded-t-lg lg:h-[60vh]"
            />
          </div>
        ))}
      </Carousel>
      <div className="px-8"></div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-end lg:justify-between">
          <p className="hidden text-xl lg:flex lg:text-4xl">{`${car.brand} ${car.model}`}</p>
          <div>
            <Link
              target="_blank"
              href={`http://localhost:8000/${car.brochura}`}
              className="flex gap-2 transition duration-300 hover:text-secundary"
            >
              <span className="text-md md:text-xl xl:text-2xl">
                Download Brochure
              </span>
              <Download className="mt-1 h-4 w-4 lg:h-6 lg:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrochureItem
