"use client"
import React from 'react';
import CardCarousel from '../components/CardCarousel';



const Veiculos:React.FC = () =>{
  const cardData = [
    {
      title: 'Nissan Navara',
      description: 'Lorem Ipsum  ',
      images: ['https://images.unsplash.com/photo-1636882441787-d9ac4ea22637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', 'https://images.unsplash.com/photo-1590053936004-faca6038bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1609362092918-47a34787c260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'],
      price: '27800.00 MT',
      date:'14/03/22',
      combustivel:'Gasolina',
      kilometragem:'1500'


    },
    {
      title: 'Nissan Navara',
      description: 'Lorem Ipsum ',
      images: ['https://images.unsplash.com/photo-1592805723127-004b174a1798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1402&q=80', 'https://images.unsplash.com/photo-1579377090611-3adf9bbdba07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
      price: '27800.00 MT',
      date:'14/03/22',
      combustivel:'Gasolina',
      kilometragem:'1500'
    },
    {
        title: 'Nissan Navara',
        description: 'Lorem Ipsum ',
        images: ['https://media.istockphoto.com/id/1333273915/photo/nissan-np300-navara-stopped-on-the-hill-near-ortahisar-castle-in-cappadocia.jpg?s=1024x1024&w=is&k=20&c=v6g6HMldkiEqe_HU42rig-fHjJD3LY_R9nIAKDPgvEs=', 'https://media.istockphoto.com/id/995801036/photo/nissan-np300-navara-off-roading.jpg?s=1024x1024&w=is&k=20&c=o4XmKGoF4TnlsqfRT0x2yAjlTLEu2t-IgV76MNpyZ_Y=', 'https://media.istockphoto.com/id/985030288/photo/nissan-np300-navara-passing-the-pond.jpg?s=1024x1024&w=is&k=20&c=evvOHkaUVIK74LDYU_z6qHYyWOeWSIITqFvXik2Izes='],
        price: '27800.00 MT',
        date:'14/03/22',
        combustivel:'Gasolina',
        kilometragem:'1500'
      },
  
  ];

  return (
    <main>
          <div>
          <h2 className="w-36 h-[30px] not-italic font-normal text-2xl leading-[30px] text-[#63707F] ml-16  top-0">Loren Ipsum</h2>
          </div>
          <div className="space-y-4">
          <h1 className="h-[45px] not-italic font-normal text-4xl leading-[45px] uppercase text-[#0D77B5]  ml-16  top-72 ">Loren Ipsum</h1>
          </div>
           <div className="mt-4">
           <hr className="w-[1400px] h-0 leading-[45px] border border-solid border-[#0D77B5]      ml-16   top-80 mt-4 "></hr>
           </div>
             
        

        <div className=" mt-8 grid lg:grid-cols-5 lg:gap-10   px-16">
                <select id="small" className="block w-full  p-2 mb-6 text-sm text-gray-900 border top-20     border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Tipo</option>
                <option value="US">Min bus</option>
                
                </select>
                <select id="small" className="block w-full   p-2 mb-6 text-sm text-gray-900 border top 20   border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Marca</option>
                <option value="US">Toyota</option>
               
                </select>
                <select id="small" className="block w-full  p-2 mb-6 text-sm text-gray-900 border top 20   border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Modelo</option>
                <option value="US"></option>
                
                </select>
                <select id="small" className="block w-full  p-2 mb-6 text-sm text-gray-900 border top 20   border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Ano</option>
                <option value="US">2010</option>
               
                </select>
                <select id="small" className="block w-full  p-2 mb-6 text-sm text-gray-900 border top 20    border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Categoria</option>
                <option value="US">Pesado</option>
               
                </select>
                <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border top 20   border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Combustível</option>
                <option value="US">Gasoleo</option>
               
                </select>
                <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border top 20   border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Kms</option>
                <option value="US">Kms</option>
               
                </select>
                <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border top 20   border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Categoria</option>
                <option value="US">United States</option>
                </select>
                

               <input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600   dark:focus:border-blue-500">Pesquisar</button>
               
        </div>

        <div className="mt-8 grid lg:grid-cols-3 lg:gap-10   px-16">
      
          {cardData.map((card, index) => (
        <CardCarousel key={index} {...card} />
        ))}
           </div>

        </main>
    
  );
}

export default Veiculos;








