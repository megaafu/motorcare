import React from 'react'
import { Car, Coins, Gear, Plus, User } from './icons/Icons'
import ContainerNoPadding from './ui/ContainerNoPadding'


const Prefooter = () => {
  const links =[
    {
      "label":"Solicitar Cotacao",
      "icon":Coins
    },
    {
      "label":"Agendar Test-Drive",
      "icon": Car
    },
    {
      "label":"Agendar Manutencao",
      "icon":Gear
    },
    {
      "label":"Saber Mais",
      "icon":Plus
    },
    {
      "label":"Contate-nos",
      "icon":User
    },
  ]
  
  
  return (
    <div className=" bg-sky-700 w-full">
        <ContainerNoPadding>
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
        </ContainerNoPadding>
            
            
    </div>
  )
}

export default Prefooter