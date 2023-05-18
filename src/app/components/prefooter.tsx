import React from 'react'
import Car from './icons/car'
import Gear from './icons/gear'
import Plus from './icons/plus'
import Coins from './icons/coins'
import User from './icons/user'

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
        <div className="max-w-screen-xl mx-auto ">
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
        </div>
            
            
    </div>
  )
}

export default Prefooter