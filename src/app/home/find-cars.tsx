"use client"

import React from 'react'
import { ICarDetails } from '../../core/model/CarDetails'

import CardCarousel from '../../components/CardCarousel'
import { ArrowFoword } from '@/core/components/icons/Icons'
import Menu from '@/components/Menu'
import Container from '@/core/components/ui/Container'
import ContentPadding from '@/core/components/ui/ContentPadding'
import SecundaryButton from '@/core/components/ui/SecundaryButton'

type FindCarsProps = {
    cars:ICarDetails[]
}

const FindCars:React.FC<FindCarsProps> = ({cars}) => {
    return (
        <Container>
            <Menu title='Find your Car' navigation={["All","New","Used"]}/>'
            <ContentPadding>
                <div className='flex flex-wrap justify-between '>
                    {cars.map((car, index) => {
                    return(
                        <CardCarousel key={index} car={car}/>
                    )
                    })}
                </div>
                <SecundaryButton/>
            </ContentPadding>
        </Container>    
    )
}

export default FindCars