import React from 'react'



const Hero = () => {
  return (
    <div className=" bg-hero bg-no-repeat bg-cover bg-center">
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 xl:gap-0 h-[700px]">
            <div className="absolute left-0 bottom-24 place-self-center ">
            <p className="max-w-2xl text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-white">COMMITED TO MANUFACTURING EXCELLENCE</p>                             
            </div>
            <div className="absolute right-0 bottom-8 place-self-center ">
            <p className="max-w-2xl text-xl font-reguar t md:text-xl xl:text-2xl text-white">Manufaturing with Excellence</p>                             
            </div>
        </div>
    </div>
  )
}
export default Hero