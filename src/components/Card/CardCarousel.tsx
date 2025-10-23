"use client";
import { IUsedCar } from "@/model/usedCar";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDescription from "./CardDescription";
import CardRoot from "./CardRoot";
import CardSub from "./CardSub";
import CardTitle from "./CardTitle";
import ImageCarousel from "./ImageCarousel";
import { useRouter } from "next/navigation";

interface CardCarouselProps {
  className?: string;
  car: IUsedCar;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ className, car }) => {
  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " MZN";
  }

  function mileageFormat(num: number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const [autoPlay, setAutoPlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAutoPlay = (hoverState: boolean) => {
    setAutoPlay(hoverState);
    setIsHovered(hoverState);
  };

  const router = useRouter();
  const images: string[] = JSON.parse(car.car_image);

  return (
    <motion.div
      className="cursor-pointer group"
      onHoverStart={() => handleAutoPlay(true)}
      onHoverEnd={() => handleAutoPlay(false)}
      onClick={() => router.push(`vehicles/${car.id}`)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
    >
      <CardRoot className={`overflow-hidden ${className}`}>
        {/* Image Section with Overlay on Hover */}
        <div className="relative">
          <ImageCarousel
            images={images}
            autoPlay={autoPlay}
            interval={2000}
            transitionTime={500}
          />
          
          {/* Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
          />
    
        </div>

        {/* Content Section */}
        <div className="px-4 py-6 space-y-4">
          {/* Title and Year */}
          <div className="space-y-2">
            <CardTitle>
              {`${car.brand} ${car.model}`}
            </CardTitle>
            <CardDescription>
              <p className="text-gray-600 font-medium">{car.year_model}</p>
              <motion.p 
                className="diagonal-fractions text-red-500 font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {currencyFormat(Number(car.price))}
              </motion.p>
            </CardDescription>
          </div>

          <hr className="border-gray-200" />

          {/* Specifications */}
            <CardSub>
            <div className="flex gap-2 ">
              <Image width={16} height={16} src="/icons/gas.svg" alt="" />
              <p className="text-sm  font-bold text-light-text">{car.fuel}</p>
            </div>
            <div className="flex gap-2 ">
              <Image width={16} height={16} src="/icons/gearshift.svg" alt="" />
              <p className="text-sm  font-bold text-light-text">
                {car.transmission}
              </p>
            </div>
            <div className="flex gap-2">
              <Image width={16} height={16} src="/icons/speed.svg" alt="" />
              <p className="text-sm  font-bold text-light-text">
                {mileageFormat(Number(car.mileage))} km
              </p>
            </div>
          </CardSub>

          {/* Spacer between specifications and button */}
          <div className="pt-4"></div>
        </div>
      </CardRoot>
    </motion.div>
  );
};

export default CardCarousel;