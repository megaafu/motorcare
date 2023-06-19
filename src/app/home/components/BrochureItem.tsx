import { Download } from '@/components/icons/Icons';
import { ICar } from '@/core/model/Car';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

type BrochureItemProps = {
  car: ICar;
};

const BrochureItem: React.FC<BrochureItemProps> = ({ car }) => {
  return (
    <div id='Sedan' className="relative max-w-screen-xl mx-auto h-[640px] ">
       <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showIndicators={true}
        showArrows={false}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        interval={3000}
        transitionTime={3000}
        
      >
        {car.imageUrl.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Image ${index}`} className="h-[520px] rounded-t-lg" />
          </div>
        ))}
      </Carousel>
      <div className="px-8">
        <p className="absolute bottom-8 left-8 text-4xl ">{car.carname}</p>
      </div>
      <div className="absolute right-0 bottom-0 place-self-center">
        <a href="#" className="flex self-center gap-4 hover:text-secundary transition duration-300 p-4">
          <span className="text-xl md:text-xl xl:text-2xl">Download Brochure</span>
          <Download />
        </a>
      </div>
    </div>
  );
};

export default BrochureItem;
