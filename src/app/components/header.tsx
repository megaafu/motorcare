"use client"

import LanguageSwitcher from './language_switcher'
import { useState } from 'react';
import Link from 'next/link';

const header = () => {
  var menu = [
    {
      "label":"Home",
      "url":"/"
    },
    {
      "label":"Sobre Nos",
      "url":"/about"
    },
    {
      "label":"Veiculos",
      "url":"/veiculos"
    },
    {
      "label":"Pecas e Acessorios",
      "url":"/"
    },
    {
      "label":"Serviços",
      "url":"/"
    },
    {
      "label":"Contato",
      "url":"/"
    },


  ]

  const [selectMenu, setSelectedMenu] = useState(menu[0]?.label);
  const handleMenu =(item:string) => {
    setSelectedMenu(item);
  }

  return (
    <header className=' mt-11 absolute w-full z-50'>      
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
              <img src="/images/logo.svg" alt="MotorCare"/>
          </a>
          <div className="flex items-center md:order-2">
            <LanguageSwitcher/>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              { menu.map((item, index) => {
                return (
                  selectMenu === item.label ?
                  <li key={index} className="group text-sky-700 after:text-sky-600 transition duration-300 md:text-md lg:text-lg">
                    <Link href={item.url}>
                      {item.label}
                      <span className="mt-1 block max-w-full h-0.5 bg-sky-600"></span>
                    </Link>
                    

                  </li>
                  : <li key={index}>
                    <Link href={item.url} onClick={() => handleMenu(item.label)} className="group text-gray-700 after:text-sky-600 transition duration-300 md:text-md lg:text-lg">
                      {item.label}
                      <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                    </Link>
                </li>
                )              
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default header