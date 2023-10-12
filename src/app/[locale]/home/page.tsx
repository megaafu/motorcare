import Subscribe from '@/components/Subscribe'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import { getTranslator } from 'next-intl/server'
import NavBlogs from './components/Blog/NavBlogs'
import NavCategories from './components/Category/NavCategories'
import NavFindCars from './components/UsedCars/NavFindCars'
import BannerCarousel from './components/Banner/BannerCarousel'

export default async function Home({
  params: { locale }
}: { params: { locale: string } }) {

  const t = await getTranslator(locale, 'Home')
  return (
    <main>
      <BannerCarousel />
      <Container>
        <NavCategories />
        <NavFindCars />
      </Container>
      <div className="w-full bg-informative bg-cover bg-center bg-no-repeat">
        <PagePadding>
          <Container>
            <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:justify-between">
              <div className="flex w-full flex-col">
                <span className="text-sm text-gray-300">{t('subscribe')}</span>
                <span className=" text-xl text-white">
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
