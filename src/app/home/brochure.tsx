import Menu from '@/components/Menu'
import { Download } from '@/components/icons/Icons'
import Container from '@/components/ui/Container'
import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { ICar } from '@/core/model/Car'
import React from 'react'



type BrochureProps = {
    carsData:ICar[]
    
}

const Brochure:React.FC<BrochureProps> = ({carsData}) => {
  return (
    
        <Container>
            <PagePadding>

            <Menu title='Car Presentation' navigation={[""]}/>
            <ContentPadding>
                <div className="grid grid-cols-3 gap-8">
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
                    <SecundaryButton/>
            </ContentPadding>    

            </PagePadding>
        </Container>

  )
}

export default Brochure