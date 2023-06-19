"use client"
import React from 'react';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';
import ContentPadding from '@/components/ui/ContentPadding';
import CarFilter from './components/CarFilter';
import CarList from './components/CarList';


export default async function UsedCars(){
  return (
    <main>
      <div className='bg-cars-hero w-full h-[240px] bg-cover bg-center bg-no-repeat'>
      </div>
      <Container>
        <PagePadding>
          <div className="">
            <h1 className="h-[45px] font-normal text-4xl leading-[45px] uppercase text-primary top-72 ">Loren Ipsum</h1>
          </div>
          <div className="mt-4">
            <hr className="border border-solid border-primary top-80 mt-4 "></hr>
          </div>
          <ContentPadding>
            <CarFilter/>
            
          </ContentPadding>
         <CarList/>
        </PagePadding>
       
      </Container>

    </main>
    
  );
}









