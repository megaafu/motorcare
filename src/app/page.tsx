import HorizontalScroll from './components/horizontalScroll'
import Menu from './components/menu'
import Download from './components/icons/download'

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
  return (
      <main>
        
        <div className=" bg-hero bg-no-repeat bg-cover bg-center">
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 xl:gap-0 h-[700px]">
              <div className="absolute left-0 bottom-24 place-self-center ">
                <p className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">COMMITED TO MANUFACTURING EXCELLENCE</p>                             
              </div>
              <div className="absolute right-0 bottom-8 place-self-center ">
                <p className="max-w-2xl text-xl font-reguar t md:text-xl xl:text-2xl text-white">Manufaturing with Excellence</p>                             
              </div>
          </div>
        </div>
        
        <div className="py-10">
          <Menu title='Categoria' navigation={["Hatch","Sedan", "Picape"]}/>
          <HorizontalScroll>
            {
              cars.map((car, index) => {
                return (
                  <div className="flex justify-center px-20 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                      <img className="mx-auto pt-8" src={car} alt=""/>
                      <p className='text-bold text-2xl px-12 py-4'> Nissan</p>
                    </a>
                    
                  </div>
                )
              })
            }
          </HorizontalScroll>
        </div>
        <div className="bg-brochure bg-no-repeat bg-cover bg-center">
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto h-[470px]">
              <div className="absolute right-0 bottom-8 place-self-center">
                <a href='#' className="flex self-center text-white gap-4 hover:text-sky-600 transition duration-300">
                  <span className='font-bold text-xl md:text-xl xl:text-2xl '>Download Brochure</span>
                  <Download/>
                </a>
              </div>
          </div>
        </div>
        <div className="py-12 ">
          <Menu title='Blog' navigation={["All","Trending", "last Week"]}/>
          <div className='max-w-screen-xl px-4 mx-auto py-8'>
            <div className="flex justify-between ">
              {
                blogPosts.map((post, index) => {
                  return(
                    <div className={`bg-white border border-gray-200 rounded-lg shadow `}>
                      <a href="#" className="">
                        <img src={post.image} className='w-full rounded-t-lg'/>
                      </a>
                      <div className='p-5'>
                        <div className='pt-4 '>
                            <h1 className="text-xl font-bold ">{post.title}</h1>
                            <p className="text-sm pt-2 text-gray-700 ">{post.description}</p>
                        </div>
                        <div className='flex justify-between pt-8'>
                            <h1 className="text-md font-bold text-gray-700">{post.date}</h1>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-md font-regular text-center text-white bg-sky-700 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
  )
}
