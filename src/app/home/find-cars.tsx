"use client"

import React, { useEffect, useState } from 'react'
import Container from '@/components/ui/Container'
import CardCarousel from '@/components/CardCarousel'
import Menu from '@/components/Menu'
import SecundaryButton from '@/components/ui/SecundaryButton'
import PagePadding from '@/components/ui/PagePadding'
import { ICar } from '@/core/model/Car'
import IGetAllCarsUseCase from '@/core/usecases/IGetAllCarsUseCase'
import GetAllCarsUseCase from '@/lib/usecases/GetAllCarsUseCase'




const FindCars = () => {
    
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
    const fetchCars = async () => {
        try {
            const getAllCarsUseCase: IGetAllCarsUseCase = new GetAllCarsUseCase();
            const carsData = await getAllCarsUseCase.execute();
            setCars(carsData);
        } catch (error) {
        }
    };

    fetchCars();
    }, []);


    return (
        <Container>
            <PagePadding>
                <Menu title='Find your Car' navigation={["All","New","Used"]}/>'
                <div className='flex flex-wrap justify-between '>
                    {cars.filter((cars,index)=>index<3)
                    .map((car, index) => {
                    return(
                        <CardCarousel key={index} car={car}/>
                    )
                    })}
                </div>
                <SecundaryButton/>
            </PagePadding>
        </Container>    
    )
}

export default FindCars