"use client"

import Menu from '@/components/Menu';
import Container from '@/components/ui/Container';
import ContentPadding from '@/components/ui/ContentPadding';
import PagePadding from '@/components/ui/PagePadding';
import SecundaryButton from '@/components/ui/SecundaryButton';
import { ICar } from '@/core/model/Car';
import React, { useEffect, useState } from 'react';
import BrochureItem from './brochureItem';
import IGetAllCarsUseCase from '@/core/usecases/IGetAllCarsUseCase';
import GetAllCarsUseCase from '@/lib/usecases/GetAllCarsUseCase';



const Brochure = () => {
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
    <Container>
      <PagePadding>
        <Menu title="Car Presentation" navigation={[""]} />
        <ContentPadding>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col justify-between">
              {cars
                .filter((_car, index) => index < 2)
                .map((car, index) => (
                  <div
                    key={index}
                    onClick={() => handleIndex(index)}
                    className="flex flex-col cursor-pointer"
                  >
                    <img className="rounded-xl" src={car.imageUrl[0]} alt="" />
                  </div>
                ))}
            </div>
            <div className="col-span-2">
              {cars.length > 0 && <BrochureItem car={cars[selectedIndex]} />}
            </div>
          </div>
          <SecundaryButton />
        </ContentPadding>
      </PagePadding>
    </Container>
  );
};

export default Brochure;
