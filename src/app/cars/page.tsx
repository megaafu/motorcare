"use client"
import React from 'react';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';
import ContentPadding from '@/components/ui/ContentPadding';
import CarFilter from './CarFilter';
import CarList from './CarList';


export default async function UsedCars(){
  return (
    <main>
      <div className='bg-cars-hero w-full h-[240px] bg-cover bg-center bg-no-repeat'>
      </div>
      <Container>
        <PagePadding>
          <div className="">
            <h1 className="h-[45px] not-italic font-normal text-4xl leading-[45px] uppercase text-[#0D77B5] top-72 ">Loren Ipsum</h1>
          </div>
          <div className="mt-4">
            <hr className="border border-solid border-[#0D77B5] top-80 mt-4 "></hr>
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









