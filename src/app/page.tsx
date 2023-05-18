'use client';
import HorizontalScroll from './components/horizontalScroll'
import Menu from './components/menu'
import 'react-responsive-carousel/lib/styles/carousel.min.css';




export default function Home() {
  return (
      <main>
        
        <div className=" bg-blue-950 h-full">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12 xl:gap-0 ">
              <div className="mr-auto place-self-center lg:col-span-7 mt-56">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">COMMITED TO MANUFACTURING EXCELLENCE</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>                
              </div>               
          </div>
        </div>
        
        <div className="py-12 h-full">
          <Menu title='Categoria' navigation={["Hatch","Sedan", "Picape"]}/>
          <HorizontalScroll>
           
            <div className="bg-blue-500 w-40 h-40"></div>
            <div className="bg-red-500 w-40 h-40"></div>
            <div className="bg-green-500 w-40 h-40"></div>
            <div className="bg-yellow-500 w-40 h-40"></div>
            
            <div className="bg-blue-500 w-40 h-40"></div>
            <div className="bg-red-500 w-40 h-40"></div>
            <div className="bg-green-500 w-40 h-40"></div>
            <div className="bg-yellow-500 w-40 h-40"></div>

            <div className="bg-blue-500 w-40 h-40"></div>
            <div className="bg-red-500 w-40 h-40"></div>
            <div className="bg-green-500 w-40 h-40"></div>
            <div className="bg-yellow-500 w-40 h-40"></div>

          </HorizontalScroll>
        </div>



      


      </main>
  )
}
