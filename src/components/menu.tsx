"use client"

import React, { useState } from 'react'

interface MenuProps{
    title: string;
    navigation:string[];
}

const Menu:React.FC<MenuProps> = ({title, navigation}) => {

    const [selectMenu, setSelectedMenu] = useState(navigation[0]);
    const handleMenu =(item:string) => {
      setSelectedMenu(item);
    }

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-2">
                <a href="https://flowbite.com/" className="flex items-center">
                    <p className='text-3xl text-sky-700'>{title}</p>
                </a>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        { navigation.map((nav, index) => {
                            return (
                                selectMenu === nav ?
                                <li key={index}>
                                    <a href="#" className="group text-sky-700 after:text-sky-600 transition duration-300 md:text-md lg:text-lg">
                                        {nav}
                                        <span className="mt-1 block max-w-full h-0.5 bg-sky-600"></span>
                                    </a>
                                 </li>
                                : <li key={index}>
                                    <a href="#" onClick={() => handleMenu(nav)} className="group text-gray-700 after:text-sky-600 transition duration-300 md:text-md lg:text-lg">
                                        {nav}
                                        <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                                    </a>
                                </li>
                            )              
                        })}
                    </ul>
                </div>
                
            </div>
            <span className="max-w-screen-xl mt-1 block h-[0.1px] bg-sky-600 mx-auto"></span>
        </nav>    
    ) 
}

export default Menu