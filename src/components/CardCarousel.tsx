import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { ICarDetails } from '../core/model/CarDetails';

type CardCarouselProps ={
  car:ICarDetails
}
const CardCarousel: React.FC<CardCarouselProps> = ({ car }) => {
  
    return (
      <div className="max-w-md bg-white border border-gray-200  shadow rounded-lg overflow-hidden">
        
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showArrows={false} stopOnHover={false} swipeable={true} emulateTouch={true} interval={5000} transitionTime={500}>
          {
            car.images.map((image, index) => {
                return(
                  <div className='h-[240px] w-full' key={index} bg-gray-200 >
                    <img src={image} alt="image" className="rounded-t-lg "/>
                  </div>
                )
            }
          )}
        </Carousel>
  
        <div className="px-4 py-6">
          <h3 className=' text-xl font-bold '>{car.title}</h3>
          <div className='flex justify-between py-2 '>
            <p className=' text-lg text-gray-700'>{car.description}</p>
            <p className=' text-lg text-[#FF0000]'>{car.price}</p>
          </div>
          <hr className='border-1 border-[#272424] '></hr>
          <div className='flex justify-between py-4'>
              <div className='flex gap-2'>
                <img src="/icons/calendar.svg" alt="" />
                <p className='text-md text-bold text-gray-500' >{car.date}</p>
              </div>
              <div className='flex gap-2'>
                <img src="/icons/gas.svg" alt="" />
                <p className='text-md text-bold text-gray-500'>{car.combustivel}</p>
              </div>
              <div className='flex gap-2'>
                <img src="/icons/speed.svg" alt="" />
                <p className='text-md text-bold text-gray-500'>{car.kilometragem}</p>
              </div>
          </div>
    
        </div>
      </div>
    );
  }


export default CardCarousel;
