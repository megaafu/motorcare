import React from 'react';
import { render } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
interface CardCarouselProps {
  images: string[];
  title: string;
  description: string;
  price: string;
  date:string;
  combustivel:string;
  kilometragem:string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ images, title, description, price ,date, combustivel,kilometragem }) => {
  
    return (
      <div className="max-w-sm bg-white border border-gray-200  shadow rounded-lg overflow-hidden">
        
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showArrows={false} stopOnHover={false} swipeable={true} emulateTouch={true} interval={5000} transitionTime={500}>
          {
            images.map((image, index) => {
                return(
                  <div className='h-[240px] w-full' key={index} bg-gray-200 >
                    <img src={image} alt="image" className="rounded-t-lg "/>
                  </div>
                )
            }
          )}
        </Carousel>
  
        <div className="px-4 pb-6">
          <h3 className=' text-xl font-bold '>{title}</h3>
          <div className='flex justify-between py-2 '>
            <p className=' text-lg text-gray-700'>{description}</p>
            <p className=' text-lg text-[#FF0000]'>{price}</p>
          </div>
          <hr className='border-1 border-[#272424] '></hr>
          <div className='flex justify-between py-4'>
              <div className='flex gap-2'>
                <img src="/icons/calendar.svg" alt="" />
                <p className='text-md text-bold text-gray-500' >{date}</p>
              </div>
              <div className='flex gap-2'>
                <img src="/icons/gas.svg" alt="" />
                <p className='text-md text-bold text-gray-500'>{combustivel}</p>
              </div>
              <div className='flex gap-2'>
                <img src="/icons/speed.svg" alt="" />
                <p className='text-md text-bold text-gray-500'>{kilometragem}</p>
              </div>
          </div>
    
        </div>
      </div>
    );
  }


export default CardCarousel;
