import { Download } from '@/components/icons/Icons'
import { ICar } from '@/model/Car'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

type BrochureItemProps = {
  car: ICar
}

const BrochureItem: React.FC<BrochureItemProps> = ({ car }) => {
  return (
    <div id={car.id} className="relative h-[44vh] lg:h-[640px]">
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
        {car.imageUrl.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              width={1080}
              height={1080}
              src={image}
              alt={`Image ${index}`}
              className="h-[38vh] rounded-t-lg lg:h-[520px]"
            />
          </div>
        ))}
      </Carousel>

      <div className="px-8"></div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-between">
          <p className="text-xl lg:text-4xl">{car.carname}</p>
          <div>
            <a
              href="#"
              className="flex gap-2 transition duration-300 hover:text-secundary"
            >
              <span className="text-md md:text-xl xl:text-2xl">
                Download {car.carname} Brochure
              </span>
              <Download className="mt-1 h-4 w-4 lg:h-6 lg:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrochureItem
