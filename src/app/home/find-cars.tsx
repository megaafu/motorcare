"use client"

import React from 'react'
import { ICarDetails } from '../../model/CarDetails'

import CardCarousel from '../../components/CardCarousel'
import { ArrowFoword } from '@/components/icons/Icons'
import Menu from '@/components/Menu'
import Container from '@/components/ui/Container'

type FindCarsProps = {
    cars:ICarDetails[]
}

const FindCars:React.FC<FindCarsProps> = ({cars}) => {
    return (
        <Container>
            <Menu title='Find your Car' navigation={["All","New","Used"]}/>'
                <div className='flex flex-wrap justify-between'>
                    {cars.map((car, index) => {
                    return(
                        <CardCarousel key={index} car={car}/>
                    )
                    })}
                </div>
                <div className='flex justify-end pt-10'>
                    <a href="#" className='flex group alig-center text-sky-600 gap-2 rounded-lg px-5 border border-transparent py-2 hover:border-sky-600'>
                        <p className='text-xl md:text-xl xl:text-xl '>View More</p>
                        <ArrowFoword />
                        <span className="mt-1 block max-w-full h-0.5 bg-sky-600"></span>
                    </a>
                </div>
        </Container>    
    )
}

export default FindCars