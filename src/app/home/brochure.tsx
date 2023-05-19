import React from 'react'
import { ICar } from '../../model/Car'
import Download from '../../components/icons/download'
import Menu from '../../components/menu'
import ArrowFoword from '../../components/icons/arrow-foword'

type BrochureProps = {
    carsData:ICar[]
    
}

const Brochure:React.FC<BrochureProps> = ({carsData}) => {
  return (
    <div className="py-10 ">
        <div className="max-w-screen-xl mx-auto pt-10">
            <Menu title='Car Presentation' navigation={[""]}/>
            <div className="pt-12 grid grid-cols-3 gap-8">
                <div className=''>
                    { carsData.map((card, index) => {
                        return(
                    
                            <div className="flex flex-col justify-center items-center gap-4 p-2 mb-2 border rounded-xl">
                                <img className=" rounded-xl" src={card.image} alt=""/>
                                <p className='text-2xl font-bold'>{card.brand}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='col-span-2'>
                    <div className="bg-brochure bg-no-repeat bg-cover bg-center rounded-xl">
                        <div className="relative max-w-screen-xl  py-8 mx-auto h-[600px]">
                            <div className="absolute right-0 bottom-0 place-self-center">
                                <a href='#' className="flex self-center text-white gap-4 hover:text-sky-600 transition duration-300 p-4">
                                    <span className='text-xl md:text-xl xl:text-2xl '>Download Brochure</span>
                                    <Download/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end pt-10'>
                    <a href="#" className='flex group alig-center text-sky-600 gap-2 rounded-lg px-5 border border-transparent py-2 hover:border-sky-600'>
                        <p className='text-xl md:text-xl xl:text-xl '>View More</p>
                        <ArrowFoword />
                        <span className="mt-1 block max-w-full h-0.5 bg-sky-600"></span>
                    </a>
                </div>
        </div>
    </div>
  )
}

export default Brochure