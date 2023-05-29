import { Download } from '@/components/icons/Icons';
import { ICar } from '@/core/model/Car';
import React from 'react';

type BrochureItemProps = {
  car: ICar;
};

const BrochureItem: React.FC<BrochureItemProps> = ({ car }) => {
  return (
    <div className="relative max-w-screen-xl mx-auto">
      <img src={car.imageUrl[0]} alt="" className="rounded-lg" />
      <div className="px-8">
        <p className="absolute bottom-8 left-8 text-4xl font-boldn text-white">{car.carname}</p>
      </div>
      <div className="absolute right-0 bottom-0 place-self-center">
        <a href="#" className="flex self-center text-white gap-4 hover:text-sky-600 transition duration-300 p-4">
          <span className="text-xl md:text-xl xl:text-2xl">Download Brochure</span>
          <Download />
        </a>
      </div>
    </div>
  );
};

export default BrochureItem;
