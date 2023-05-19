import Hero from './hero';
import Categories from './categories';
import Brochure from './brochure';
import FindCars from './find-cars';
import Blog from './blog';

export default function Home() {
  const cars =[
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-1.png",
  ]
  const blogPosts =[
    {
      "title": "Lorem Ipsum",
      "date": "25/05/2022",
      "image": "/images/post-1.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
      "title": "Lorem Ipsum",
      "date": "25/05/2022",
      "image": "/images/post-2.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    
  ]
  const cardData = [
  
    {
        title: 'Nissan Navara',
        description: 'Lorem Ipsum ',
        images: ['https://media.istockphoto.com/id/1333273915/photo/nissan-np300-navara-stopped-on-the-hill-near-ortahisar-castle-in-cappadocia.jpg?s=1024x1024&w=is&k=20&c=v6g6HMldkiEqe_HU42rig-fHjJD3LY_R9nIAKDPgvEs=', 'https://media.istockphoto.com/id/995801036/photo/nissan-np300-navara-off-roading.jpg?s=1024x1024&w=is&k=20&c=o4XmKGoF4TnlsqfRT0x2yAjlTLEu2t-IgV76MNpyZ_Y=', 'https://media.istockphoto.com/id/985030288/photo/nissan-np300-navara-passing-the-pond.jpg?s=1024x1024&w=is&k=20&c=evvOHkaUVIK74LDYU_z6qHYyWOeWSIITqFvXik2Izes='],
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
    
    {
      title: 'Nissan Navara',
      description: 'Lorem Ipsum ',
      images: ['https://media.istockphoto.com/id/1333273915/photo/nissan-np300-navara-stopped-on-the-hill-near-ortahisar-castle-in-cappadocia.jpg?s=1024x1024&w=is&k=20&c=v6g6HMldkiEqe_HU42rig-fHjJD3LY_R9nIAKDPgvEs=', 'https://media.istockphoto.com/id/995801036/photo/nissan-np300-navara-off-roading.jpg?s=1024x1024&w=is&k=20&c=o4XmKGoF4TnlsqfRT0x2yAjlTLEu2t-IgV76MNpyZ_Y=', 'https://media.istockphoto.com/id/985030288/photo/nissan-np300-navara-passing-the-pond.jpg?s=1024x1024&w=is&k=20&c=evvOHkaUVIK74LDYU_z6qHYyWOeWSIITqFvXik2Izes='],
      price: '27800.00 MT',
      date:'14/03/22',
      combustivel:'Gasolina',
      kilometragem:'1500'
    },
  ]
  const carsData = [
  
    {
        brand: 'Nissan Navara',
        image:"/images/car-2.png",
    },
      
    {
      brand: 'Nissan Navara',
      image:"/images/car-3.png",
    },
    
    {
      brand: 'Nissan Navara',
      image:"/images/car-1.png",
    },
  ]


  return (
      <main>
        <Hero/>
        <Categories cars={cars}/>
        <Brochure carsData={carsData}/>
        <FindCars cars={cardData}/>
        <Blog blogs={blogPosts}/>
    
      </main>
  )
}
