'use client'
import { ICar } from '@/model/Car'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CardDescription from './CardDescription'
import CardImage from './CardImage'
import CardRoot from './CardRoot'
import CardSub from './CardSub'
import CardTitle from './CardTitle'

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
  return (
    <motion.div onHoverStart={handleAutoPlay} onHoverEnd={handleAutoPlay}>
      <CardRoot className={className}>
        <CardImage image={car.car_image} />
        <div className="px-4 py-6">
          <CardTitle>{car.carname}</CardTitle>
          <CardDescription>
            <p className="text-md text-gray-700 lg:text-lg">{car.year}</p>
            <p className="text-md text-red-500 lg:text-lg">{car.price}</p>
          </CardDescription>
          <hr className="border-1 border-[#272424]" />
          <CardSub>
            <div className="flex gap-2 ">
              <Image width={20} height={20} src="/icons/gearshift.svg" alt="" />
              <p className="text-md  font-bold text-light-text">
                {car.transmission}
              </p>
            </div>
            <div className="flex gap-2 ">
              <Image width={20} height={20} src="/icons/gas.svg" alt="" />
              <p className="text-md  font-bold text-light-text">{car.fuel}</p>
            </div>
            <div className="flex gap-2">
              <Image width={20} height={20} src="/icons/speed.svg" alt="" />
              <p className="text-md  font-bold text-light-text">
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
