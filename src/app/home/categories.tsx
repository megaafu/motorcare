"use client"

import React from 'react'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import Menu from '@/components/Menu'
import ContentPadding from '@/components/ui/ContentPadding'
import HorizontalScroll from '@/components/ui/HorizontalScroll'
import Card from '@/components/ui/Card'


interface CategoryProps {
    cars:string[]
}

const Categories:React.FC<CategoryProps> = ({cars})=> {
  return (
    <Container>
         <PagePadding>

          <Menu title='Categories' navigation={["Hatch","Sedan", "Picape"]}/>
          <ContentPadding>
            <HorizontalScroll>
              {
                cars.map((car, index) => {
                  return (
                    <Card>
                      <div className="flex justify-center px-20 ">
                        <a href="#">
                          <motion.img  whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="mx-auto pt-8" src={car} alt=""/>
                          <p className='text-bold text-2xl px-12 py-4'> Nissan</p>
                        </a>
                        
                      </div>
                    </Card>
                    
                  )
                })
              }
            </HorizontalScroll>
          </ContentPadding>

         </PagePadding>
        </Container>
  )
}

export default Categories