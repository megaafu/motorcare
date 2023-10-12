'use client'
import { ICar } from '@/model/Car'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CardDescription from './CardDescription'
import CardRoot from './CardRoot'
import CardSub from './CardSub'
import CardTitle from './CardTitle'
import ImageCarousel from './ImageCarousel'

interface CardCarouselProps {
  className?: string
  car: ICar
}

const CardCarousel: React.FC<CardCarouselProps> = ({ className, car }) => {
  const [autoPlay, setAutoPlay] = useState(false)
  const handleAutoPlay = () => {
    setAutoPlay((oldAutoPlay: boolean) => {
      return (oldAutoPlay = !oldAutoPlay)
    })
  }
  const images: string[] = JSON.parse(car.car_image)
  return (
    <motion.div onHoverStart={handleAutoPlay} onHoverEnd={handleAutoPlay}>
      <CardRoot className={className}>
        <ImageCarousel
          images={images}
          autoPlay={autoPlay}
          interval={3000}
          transitionTime={1500}
        />
        <div className="px-4 py-6">
          <CardTitle>{`${car.brand} ${car.model}`}</CardTitle>
          <CardDescription>
            <p className="text-sm text-gray-700 ">{car.year_model}</p>
            <p className="text-sm text-red-500 ">{car.price}</p>
          </CardDescription>
          <hr className="border-1 border-[#272424]" />
          <CardSub>
            <div className="flex gap-2 ">
              <Image width={20} height={20} src="/icons/gearshift.svg" alt="" />
              <p className="text-xs  font-bold text-light-text">
                {car.transmission}
              </p>
            </div>
            <div className="flex gap-2 ">
              <Image width={20} height={20} src="/icons/gas.svg" alt="" />
              <p className="text-xs  font-bold text-light-text">{car.fuel}</p>
            </div>
            <div className="flex gap-2">
              <Image width={20} height={20} src="/icons/speed.svg" alt="" />
              <p className="text-xs  font-bold text-light-text">
                {car.mileage}
              </p>
            </div>
          </CardSub>
        </div>
      </CardRoot>
    </motion.div>
  )
}

export default CardCarousel
