"use client"

import Container from '@/core/components/ui/Container';
import React, { useRef } from 'react';


interface LateralScrollProps {
  children: React.ReactNode;
}

const LateralScroll: React.FC<LateralScrollProps> = ({ children }) => {


  return (

      <div className="flex overflow-x-scroll  items-center justify-between  hide-scroll-bar">
            <div className="flex space-x-4" >
                {children}
            </div>
           
      </div>

    
  );
};

export default LateralScroll;
