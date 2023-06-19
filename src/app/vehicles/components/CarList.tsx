"use client"

import CardCarousel from '@/components/CardCarousel';
import { Cars } from '@/data/cars';
import React, { useEffect, useState } from 'react'

const CarList = () => {
    // const [cars, setCars] = useState<ICar[]>([]);

    // useEffect(() => {
    // const fetchCars = async () => {
    //     try {
    //       const getAllCarsUseCase:IGetAllCarsUseCase = new GetAllCarsUseCase();
    //       const carsData = await getAllCarsUseCase.execute();
    //       setCars(carsData);
    //     }catch (error) {
    //     }
    // };

    // fetchCars();
    // }, []);

  return (
    <div className="grid lg:grid-cols-3 lg:gap-8">      
    {Cars.cars.map((car, index) => (
        <CardCarousel key={index} car={car} />
      ))
    }
  </div>
  )
}

export default CarList