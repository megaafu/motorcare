import NavCategories from './components/NavCategories';
import BrochureList from './components/BrochureList';
import NavFindCars from './components/NavFindCars';
import NavBlogs from './components/NavBlogs';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';
import SubMenu from '@/components/SubMenu';
import { BrochureMenu } from '@/data/menuData';
import Subscribe from '@/components/Subscribe';

export default async function Home() {

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
        <div className=" bg-hero bg-no-repeat bg-cover bg-center">
          <Container>
              <div className="relative lg:gap-8 lg:py-16 xl:gap-0 h-[700px]">
                  <div className="absolute left-0 bottom-24 place-self-center ">
                  <p className="max-w-2xl text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-white">COMMITED TO MANUFACTURING EXCELLENCE</p>                             
                  </div>
                  <div className="absolute right-0 bottom-8 place-self-center ">
                  <p className="max-w-2xl text-xl font-reguar t md:text-xl xl:text-2xl text-white">Manufaturing with Excellence</p>                             
                  </div>
              </div>
          </Container>
        </div>
        <Container>
          <PagePadding>
            <NavCategories/>
          </PagePadding>
          <PagePadding>
            <SubMenu label={BrochureMenu.label}/>
            <BrochureList/>
          </PagePadding>
          <PagePadding>
            <NavFindCars />
          </PagePadding>
        </Container>
        <div className="w-full bg-informative bg-no-repeat bg-cover bg-center">
            <PagePadding>
                <Container>
                  <div className="flex justify-between items-center">
                      <div className='flex flex-col'>
                          <span className='text-gray-300 text-md'>subscribe to our</span>
                          <span className='text-white text-2xl'>Informative Report</span>
                      </div>
                      <Subscribe/>
                  </div>
                </Container>
            </PagePadding>
        </div>
        <Container>
          <PagePadding>
            <NavBlogs blogs={blogPosts}/>
          </PagePadding>
        </Container>
        
    
      </main>
  )
}
