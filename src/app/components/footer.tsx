import React from 'react'

const footer = () => {
  const links =[
    "Sobre Nos",
    "Nossa Historia",
    "Nossas Marcas",
  ]
  const terms =[
    "Termos e Condicoes",
    "Provacidade",
    "ISO",
  ]

  return (
    <div className=" bg-blue-950 w-full">
      <div className='flex justify-between max-w-screen-xl gap-x-8 gap-y-4 px-4 py-8 mx-auto lg:py-12 '>
          <div className=' place-self-center'>
            <span className='text-3xl font-bold text-white'>
              Logo
            </span>
          </div>
          <div className=''>
            <h4 className='text-3xl font-bold text-white'>Links Uteis</h4>
            <ul className='text-ligth mt-8 text-gray-300 md:text-lg lg:text-xl'>
              {links.map((link,index)=>{
                return <li key={index} className='mt-2'><a href="#">{link}</a></li>
              })}
            </ul>
            
          </div>
          <div className=''>
            <h4 className='text-3xl font-bold text-white'>Termos Legais</h4>
            <ul className='text-ligth mt-8 text-gray-300 md:text-lg lg:text-xl'>
            {terms.map((term,index)=>{
                return <li key={index} className='mt-2'><a href="#">{term}</a></li>
              })}
            </ul>
          </div>
      </div>

    </div>
  )
}

export default footer