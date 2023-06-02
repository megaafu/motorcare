import React from 'react'
import Container from './ui/Container'
import { links } from '@/data/preFooterData'


const Prefooter = () => {

  
  
  return (
    <div className=" bg-sky-700 w-full">
        <Container>
            <ul className='flex justify-around py-6 text-ligth md:text-lg lg:text-xl'>
              {links.map((link,index)=>{
                return (
                    <li key={index} className='flex  items-center'>
                        <a href="#" className='flex items-center color text-white gap-4 hover:text-sky-600 transition duration-300'>
                          {<link.icon/>}
                          <span>{link.label}</span>
                        </a>
                        
                    </li>
                )
              })}
            </ul>
        </Container>
            
            
    </div>
  )
}

export default Prefooter