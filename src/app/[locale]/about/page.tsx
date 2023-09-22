
import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import Paragraph from '@/components/ui/Paragraph'
import Row from '@/components/ui/Row'
import { AboutMenu, HistoryMenu, IsoMenu } from '@/constants/menuData'
import { getTranslator } from 'next-intl/server'
import Image from 'next/image'
import NavBrands from './components/NavBrands'
import CustomAccording from './components/ui/According'
import CustomTimeLine from './components/ui/CustomTimeLine'
import { History, Holding, Iso } from './constants/data'

export default async function About({
  params: { locale }
}: { params: { locale: string } }) {

  const t = await getTranslator(locale, 'About')
  return (
    <main>
      {/* Hero section */}
      <div className="h-[65vh] w-full bg-about-hero bg-cover bg-center bg-no-repeat"></div>

      <Container>
        {/* Holding Info */}
        <PagePadding>
          <Title.Root>
            <Title.Label label={t(AboutMenu.label)} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <div>
              <Paragraph>{t(Holding.info)}</Paragraph>
            </div>
            <div className="hidden w-full items-center justify-center lg:flex">
              <Image
                width={1000}
                height={1000}
                className="h-full w-full rounded-2xl"
                src="/images/about.JPG"
                alt="img"
              />
            </div>
          </Row>
        </PagePadding>

        {/* According Section */}
        <PagePadding>
          <Row className="lg:grid-cols-2">
            <div className=" hidden w-full lg:relative lg:flex lg:h-[440px] ">
              {/* Image cards */}
              <Image
                width={1000}
                height={1000}
                alt="img"
                src="/images/bg-about.JPG"
                className=" shadow-blue-gray-900/50 absolute right-0  top-0 z-0 h-[240px] w-[380px] rounded-3xl border opacity-80 shadow-xl"
              />
              <Image
                width={1000}
                height={1000}
                alt="img"
                src="/images/about.JPG"
                className=" shadow-blue-gray-900/50 absolute bottom-32  left-0  h-[240px] w-[380px] rounded-3xl border opacity-90 shadow-xl"
              />
              <Image
                width={1000}
                height={1000}
                alt="img"
                src="/images/bg-about.JPG"
                className=" shadow-blue-gray-900/50 absolute bottom-0  right-16  h-[240px] w-[380px] rounded-3xl border shadow-xl"
              />
            </div>
            <div className="">
              <CustomAccording />
            </div>
          </Row>
        </PagePadding>

        {/* NavBrands Section */}
        <NavBrands />

        {/* History Section */}
        <PagePadding>
          <div id="Our History" className="flex flex-col">
            <Title.Root>
              <Title.Label label={t(HistoryMenu.label)} />
            </Title.Root>
            <Paragraph>{t(History.info)}</Paragraph>
            <div className='h-10'></div>
            <CustomTimeLine />
          </div>
        </PagePadding>

        {/* Iso Section */}
        <PagePadding>
          <Title.Root>
            <Title.Label label={t(IsoMenu.label)} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <div>
              <Paragraph>{t(Iso.info)}</Paragraph>
            </div>
            <div className="flex w-full items-center justify-center">
              <Image
                width={1000}
                height={1000}
                className=" h-fit bg-cover"
                src="/images/iso.jpg"
                alt="img"
              />
            </div>
          </Row>
        </PagePadding>
      </Container>
    </main>
  )
}
