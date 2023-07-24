import Subscribe from '@/components/Subscribe'
import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import { BrochureMenu } from '@/constants/menuData'
import { getTranslator } from 'next-intl/server'
import NavBlogs from './components/Blog/NavBlogs'
import BrochureList from './components/Brochure/BrochureList'
import NavCategories from './components/Category/NavCategories'
import NavFindCars from './components/UsedCars/NavFindCars'

export default async function Home({
  params: { locale }
}:{params:{locale:string}}) {
 
  const t = await getTranslator(locale, 'Home')
  return (
    <main>
      <div className=" bg-hero bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="relative h-[80vh] lg:gap-8 lg:py-16 xl:gap-0">
            <div className="absolute bottom-24 left-0 place-self-center ">
              <p className="max-w-2xl text-4xl  leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                {t('hero-text')}
              </p>
            </div>
            <div className="absolute bottom-8 right-0 place-self-center ">
              <p className="font-reguar t max-w-2xl text-xl text-white md:text-xl xl:text-2xl">
                {t('hero-sub')}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <NavCategories />
        <PagePadding>
          <Title.Root>
            <Title.Label label={t(BrochureMenu.label)} />
          </Title.Root>

          <BrochureList />
        </PagePadding>
       

        <NavFindCars />
      </Container>
      <div className="w-full bg-informative bg-cover bg-center bg-no-repeat">
        <PagePadding>
          <Container>
            <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:justify-between">
              <div className="flex w-full flex-col">
                <span className="text-md text-gray-300">{t('subscribe')}</span>
                <span className=" text-xl text-white lg:text-2xl">
                  {t('informative')}
                </span>
              </div>
              <Subscribe />
            </div>
          </Container>
        </PagePadding>
      </div>
      <Container>
        <NavBlogs />
      </Container>
    </main>
  )
}
