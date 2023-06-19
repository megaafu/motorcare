"use client"

import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import React, { Fragment, useState } from 'react'
import Icon from './ui/Icon';
import { AllAcording } from '../data/acordings';


  
const CustomAccording = () => {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Fragment>
      {AllAcording.acordings.map((acording )=>{
          return(
            <Accordion className='bg-sky-100 px-8 mb-4' open={open === acording.id} icon={<Icon id={1} open={open} />}>
              <AccordionHeader className='text-xl text-black text-bold' onClick={() => handleOpen(acording.id)}>
                {acording.title}
              </AccordionHeader>
              <AccordionBody>
                <div className='text-lg pb-8 text-light-text'>
                  {acording.description}
                </div>
              </AccordionBody>
            </Accordion>
          )
      })}
  </Fragment>
  )
}

export default CustomAccording