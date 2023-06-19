"use client"

import Container from '@/components/ui/Container';
import ContentPadding from '@/components/ui/ContentPadding';
import PagePadding from '@/components/ui/PagePadding';
import SecundaryButton from '@/components/ui/SecundaryButton';
import { ICar } from '@/core/model/Car';
import React, { useEffect, useState } from 'react';
import BrochureItem from './BrochureItem';
import IGetAllCarsUseCase from '@/core/usecases/IGetAllCarsUseCase';
import GetAllCarsUseCase from '@/lib/usecases/GetAllCarsUseCase';
import { BrochureMenu } from '@/data/menuData';
import SubMenu from '@/components/SubMenu';
import { Cars } from '@/data/cars';



const BrochureList = () => {
  
  const [cars, setCars] = useState<ICar[]>([]);
  const [selectedIndex, setIndex] = useState(0);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const getAllCarsUseCase: IGetAllCarsUseCase = new GetAllCarsUseCase();
        const carsData = await getAllCarsUseCase.execute();
        setCars(carsData);
      } catch (error) {
        // Handle error
      }
    };

    fetchCars();
  }, []);

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <ContentPadding>
      <div className="grid grid-cols-3 gap-8 h-[640px]">
        <div className="flex flex-col justify-between overflow-y-hidden hover:overflow-y-auto">
          {Cars.cars
            .map((car, index) => (
              <div
                key={index}
                onClick={() => handleIndex(index)}
                className="flex flex-col cursor-pointer"
              >
                <img className="max-w-xs" src={car.imageUrl[0]} alt=""/>
              </div>
            ))}
        </div>
        <div className="col-span-2 ">
          {Cars.cars.length > 0 && <BrochureItem car={Cars.cars[selectedIndex]} />}
        </div>
      </div>
      <SecundaryButton />
    </ContentPadding>
  );
};

export default BrochureList;
