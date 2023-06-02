"use client"

import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import React, { Fragment, useState } from 'react'
import Icon from './Icon';


  
const CustomAccording = () => {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Fragment>
    <Accordion className='bg-sky-100 px-8 mb-4' open={open === 1} icon={<Icon id={1} open={open} />}>
      <AccordionHeader className='text-xl text-black text-bold' onClick={() => handleOpen(1)}>
        What is Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
        <div className='text-lg pb-8 text-gray-800'>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
        </div>
      </AccordionBody>
    </Accordion>
    <Accordion className='bg-sky-100 px-8 mb-4' open={open === 2} icon={<Icon id={2} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(2)}>
        How to use Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
        <div className='text-lg pb-8 text-gray-800'>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
        </div>
      </AccordionBody>
    </Accordion>
    <Accordion className='bg-sky-100 px-8 mb-4' open={open === 3} icon={<Icon id={3} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(3)}>
        What can I do with Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
        <div className='text-lg pb-8 text-gray-800'>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
        </div>
      </AccordionBody>
    </Accordion>
  </Fragment>
  )
}

export default CustomAccording