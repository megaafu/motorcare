import React, { useState } from 'react'
import Slider from "react-slick"
import { NextArrow, PrevArrow, } from '@/components/icons/Icons'
import { INewCar } from '@/model/newCar'
import NewCarItem from './NewCarItem'

interface SliderProps {
    carsData: INewCar[]
    isLoading?: boolean
    filter: string
}

const CarSlider = ({ carsData, isLoading, filter }: SliderProps) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }
    return (
        <div className=' hidden lg:block'>
            {isLoading ? <div></div> : carsData ? <Slider {...settings}>
                {carsData
                    .filter((car) => car.type === filter)
                    .map((car, index) => (
                        <NewCarItem key={index} car={car} carIndex={index} />
                    ))}
            </Slider> : null}
        </div>
    )
}

export default CarSlider