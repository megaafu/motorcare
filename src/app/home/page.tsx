import Subscribe from '@/components/Subscribe'
import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import { BrochureMenu } from '@/constants/menuData'
import NavBlogs from './components/Blog/NavBlogs'
import BrochureList from './components/Brochure/BrochureList'
import NavCategories from './components/Category/NavCategories'
import NavFindCars from './components/UsedCars/NavFindCars'

export default async function Home() {
  const blogPosts = [
    {
      title: 'Lorem Ipsum',
      date: '25/05/2022',
      image: '/images/post-1.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      title: 'Lorem Ipsum',
      date: '25/05/2022',
      image: '/images/post-2.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      title: 'Lorem Ipsum',
      date: '25/05/2022',
      image: '/images/post-2.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
  ]

  return (
    <main>
      <div className=" bg-hero bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="relative h-[700px] lg:gap-8 lg:py-16 xl:gap-0">
            <div className="absolute bottom-24 left-0 place-self-center ">
              <p className="max-w-2xl text-4xl  leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                COMMITED TO MANUFACTURING EXCELLENCE
              </p>
            </div>
            <div className="absolute bottom-8 right-0 place-self-center ">
              <p className="font-reguar t max-w-2xl text-xl text-white md:text-xl xl:text-2xl">
                Manufaturing with Excellence
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <PagePadding>
          <NavCategories />
        </PagePadding>
        <PagePadding>
          <Title.Root>
            <Title.Label label={BrochureMenu.label} />
          </Title.Root>
          <BrochureList />
        </PagePadding>
        <PagePadding>
          <NavFindCars />
        </PagePadding>
      </Container>
      <div className="w-full bg-informative bg-cover bg-center bg-no-repeat">
        <PagePadding>
          <Container>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-md text-gray-300">subscribe to our</span>
                <span className="text-2xl text-white">Informative Report</span>
              </div>
              <Subscribe />
            </div>
          </Container>
        </PagePadding>
      </div>
      <Container>
        <PagePadding>
          <NavBlogs blogs={blogPosts} />
        </PagePadding>
      </Container>
    </main>
  )
}
