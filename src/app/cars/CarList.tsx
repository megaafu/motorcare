"use client"

import CardCarousel from '@/components/CardCarousel';
import { ICar } from '@/core/model/Car';
import IGetAllCarsUseCase from '@/core/usecases/IGetAllCarsUseCase';
import GetAllCarsUseCase from '@/lib/usecases/GetAllCarsUseCase';
import React, { useEffect, useState } from 'react'

const CarList = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
    const fetchCars = async () => {
        try {
        const getAllCarsUseCase:IGetAllCarsUseCase = new GetAllCarsUseCase();
        const carsData = await getAllCarsUseCase.execute();
        setCars(carsData);
        } catch (error) {
        }
    };

    fetchCars();
    }, []);

  return (
    <div className="grid lg:grid-cols-3 lg:gap-10">      
    {cars.map((car, index) => (
        <CardCarousel key={index} car={car} />
      ))
    }
  </div>
  )
}

export default CarList