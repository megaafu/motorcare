import React from 'react'
import Container from './ui/Container'
import { links } from '@/data/preFooterData'
import Link from 'next/link'


const Prefooter = () => {

  
  
  return (
    <div className=" bg-primary w-full">
        <Container>
            <ul className='flex justify-around py-6 text-ligth md:text-lg lg:text-xl'>
              {links.map((link,index)=>{
                return (
                    <li key={index} className='flex  items-center'>
                        <Link href="requests/quote_form" className='flex items-center color text-white gap-4 hover:text-secundary transition duration-300'>
                          {<link.icon/>}
                          <span>{link.label}</span>
                        </Link>
                        
                    </li>
                )
              })}
            </ul>
        </Container>
            
            
    </div>
  )
}

export default Prefooter