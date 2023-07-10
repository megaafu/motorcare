'use client'
import { ICar } from '@/model/Car'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type CardCarouselProps = {
  car: ICar
}

const CardCarousel: React.FC<CardCarouselProps> = ({ car }) => {
  const [autoPlay, setAutoPlay] = useState(false)
  const handleAutoPlay = () => {
    setAutoPlay((oldAutoPlay: boolean) => {
      return (oldAutoPlay = !oldAutoPlay)
    })
  }
  return (
    <motion.div
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
      onHoverStart={handleAutoPlay}
      onHoverEnd={handleAutoPlay}
    >
      <Carousel
        autoPlay={autoPlay}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showIndicators={true}
        showArrows={false}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        interval={1500}
        transitionTime={1000}
      >
        {car.imageUrl.map((image, index) => (
          <div
            key={index}
            className="h-[240px] w-full"
            style={{ background: '#ccc' }}
          >
            <Image
              width={1080}
              height={1080}
              src={image}
              alt={`Image ${index}`}
              className="rounded-t-lg"
            />
          </div>
        ))}
      </Carousel>

      <div className="px-4 py-6">
        <h3 className="text-xl font-bold">{car.carname}</h3>
        <div className="flex justify-between py-2">
          <p className="text-lg text-gray-700">{car.year}</p>
          <p className="text-lg text-red-500">{car.price}</p>
        </div>
        <hr className="border-1 border-[#272424]" />
        <div className="flex justify-between py-4">
          <div className="flex gap-2">
            <Image width={20} height={20} src="/icons/gearshift.svg" alt="" />
            <p className="text-md h-full w-full font-bold text-light-text">
              {car.transmission}
            </p>
          </div>
          <div className="flex gap-2">
            <Image width={20} height={20} src="/icons/gas.svg" alt="" />
            <p className="text-md h-full w-full font-bold text-light-text">
              {car.fuel}
            </p>
          </div>
          <div className="flex gap-2">
            <Image width={20} height={20} src="/icons/speed.svg" alt="" />
            <p className="text-md h-full w-full font-bold text-light-text">
              {car.mileage}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CardCarousel
