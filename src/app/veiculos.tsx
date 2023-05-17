import React from 'react';
import CardCarousel from './components/CardCarousel';



export default function Veiculos(){
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
    <div>
      
      {cardData.map((card, index) => (
        <CardCarousel key={index} {...card} />
      ))}
    </div>
  );
}








