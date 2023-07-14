'use client'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import { AllAcording } from '../../constants/acordings'
import Icon from './Icon'

const CustomAccording = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <Fragment>
      {AllAcording.acordings.map((acording, index) => {
        return (
          <Accordion
            key={index}
            className="mb-4 bg-sky-100 px-8"
            open={open === acording.id}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              className="text-bold text-xl text-black"
              onClick={() => handleOpen(acording.id)}
            >
              {acording.title}
            </AccordionHeader>
            <AccordionBody>
              <div className="pb-8 text-lg text-light-text">
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
