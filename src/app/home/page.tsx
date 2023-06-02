import Hero from './hero';
import Categories from './categories';
import Brochure from './brochure';
import FindCars from './find-cars';
import Blog from './blog';
import InformativeReport from './report';
import CarRepository from '@/core/repositories/ICarsRepository';

export default async function Home() {
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
    {
      "title": "Lorem Ipsum",
      "date": "25/05/2022",
      "image": "/images/post-2.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    
  ]
  
  return (
      <main>
        <Hero/>
        <Categories cars={cars}/>
        <Brochure />
        <FindCars />
        <InformativeReport/>
        <Blog blogs={blogPosts}/>
    
      </main>
  )
}
