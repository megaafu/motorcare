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
      <div className="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} >
          {
            images.map((image, index) => {
                return(
                  <div className='flex'>
                    <img src={image} />
                  </div>
                )
            }
          )}
        </Carousel>
  
        <div className="p-5">
          <h3 className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900'>{title}</h3>
        <div>
        <p className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900'>{description}</p>
        <p className='inline-flex items-center px-4 py-2 text-sm font-medium text-center   text-[#FF0000]'>{price}</p>
        </div>
          <hr className='border-1 border-[#272424] '></hr>
          <div className='display: inline'>
          <p className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900' >{date}</p>
          <p className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900'>{combustivel}</p>
          <p className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900'>{kilometragem}</p>
          </div>
  
        </div>
      </div>
    );
  }


export default CardCarousel;
