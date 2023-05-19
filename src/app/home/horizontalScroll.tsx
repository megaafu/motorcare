"use client"

import React, { useRef } from 'react';


interface LateralScrollProps {
  children: React.ReactNode;
}

const LateralScroll: React.FC<LateralScrollProps> = ({ children }) => {


  return (
    <div className="py-10 flex overflow-x-scroll max-w-screen-xl items-center justify-between mx-auto hide-scroll-bar">
            <div className="flex space-x-4" >
                {children}
            </div>
           
    </div>
    
  );
};

export default LateralScroll;
