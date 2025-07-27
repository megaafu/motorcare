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
  const handleAutoPlay = () => {
    setAutoPlay((oldAutoPlay: boolean) => {
      return (oldAutoPlay = !oldAutoPlay);
    });
  };

  const router = useRouter();
  const images: string[] = JSON.parse(car.car_image);
  return (
    <motion.div
      className="cursor-pointer"
      onHoverStart={handleAutoPlay}
      onHoverEnd={handleAutoPlay}
      onClick={() => router.push(`vehicles/${car.id}`)}
    >
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
            <p className="text-sm diagonal-fractions text-red-500">
              {currencyFormat(Number(car.price))}
            </p>
          </CardDescription>
          <hr className="border-1 border-[#272424]" />
          <CardSub>
            <div className="flex gap-1 ">
              <Image width={18} height={18} src="/icons/gas.svg" alt="" />
              <p className="text-xs  font-bold text-light-text">{car.fuel}</p>
            </div>
            <div className="flex gap-1 ">
              <Image width={18} height={18} src="/icons/gearshift.svg" alt="" />
              <p className="text-xs  font-bold text-light-text">
                {car.transmission}
              </p>
            </div>
            <div className="flex gap-1">
              <Image width={18} height={18} src="/icons/speed.svg" alt="" />
              <p className="text-xs  font-bold text-light-text">
                {mileageFormat(Number(car.mileage))}
              </p>
            </div>
          </CardSub>
        </div>
      </CardRoot>
    </motion.div>
  );
};

export default CardCarousel;
