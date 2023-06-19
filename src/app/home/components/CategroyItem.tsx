"use client"

import ContentPadding from '@/components/ui/ContentPadding'
import { ICar } from '@/core/model/Car'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

interface CarItemProps{
    index:number
    car:ICar
}

const CategroyItem:React.FC<CarItemProps> = ({index, car}) => {
    const [hoveredIndex, setHoveredIndex] = useState(false);

    const handleMouseEnter = () => {
        setHoveredIndex(true);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(false);
    };
    return (
        <ContentPadding>

            <div key={index} className="flex justify-center">
                <a href="#">
                <motion.img
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={handleMouseLeave}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mx-auto h-[240px]"
                    src={car.imageUrl[0]}
                    alt=""
                />
                <p className="text-bold text-2xl px-12 py-4">{car.model}</p>
                <AnimatePresence>
                    {hoveredIndex === true && (
                    <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute  mx-auto w-60 bg-white"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={handleMouseLeave}
                    >
                    <div className="p-2 hover:bg-primary hover:text-white text-center transition ease-in-out duration-200 mb-2 bg-gray-300">
                        <motion.p whileHover={{scale:1.2}} transition={{duration:0.3, ease:'easeInOut'}}>
                        EXPLORE
                        </motion.p>
                    </div>
                    <div className="p-2 hover:bg-primary hover:text-white text-center transition ease-in-out duration-200 mb-2 bg-gray-300">
                        <motion.p whileHover={{scale:1.2}} transition={{duration:0.3, ease:'easeInOut'}}>
                        BOOK A TEST DRIVE
                        </motion.p>
                    </div>
                    <div className="p-2 hover:bg-primary hover:text-white text-center transition ease-in-out duration-200 mb-2 bg-gray-300">
                        <motion.p whileHover={{scale:1.2}} transition={{duration:0.3, ease:'easeInOut'}}>
                        REQUEST A COTE
                        </motion.p>
                    </div>
                    <div className="p-2 hover:bg-primary hover:text-white text-center transition ease-in-out duration-500 mb-2 bg-gray-300">
                        <motion.p whileHover={{scale:1.2}} transition={{duration:0.3, ease:'easeInOut'}}>
                        MORE INFO
                        </motion.p>
                    </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                </a>
            </div>

        </ContentPadding>
    )
}

export default CategroyItem