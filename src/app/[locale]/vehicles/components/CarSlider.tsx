import { ICar } from '@/model/Car'
import React, { useState } from 'react'
import CategroyItem from '../../home/components/Category/CategroyItem'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface SliderProps {
    carsData: ICar[]
    isLoading?: boolean
    filter: string
}

const CarSlider = ({ carsData, isLoading, filter }: SliderProps) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }
    return (
        <div className=' hidden lg:block'>
            {isLoading ? <div></div> : carsData ? <Slider {...settings}>
                {carsData
                    .filter((car) => car.status === "Novo" && car.type === filter)
                    .map((car, index) => (
                        <CategroyItem key={index} car={car} carIndex={index} />
                    ))}
            </Slider> : null}
        </div>
    )
}

export default CarSlider