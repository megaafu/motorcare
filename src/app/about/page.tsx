'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import Container from '@/components/ui/Container'
import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import { AboutMenu, HistoryMenu, IsoMenu } from '@/constants/menuData'
import Image from 'next/image'
import { useState } from 'react'
import Paragraph from '../../components/ui/Paragraph'
import Row from '../../components/ui/Row'
import CustomAccording from './components/According'
import CustomTimeLine from './components/CustomTimeLine'
import NavBrands from './components/NavBrands'
import { History, Holding, Iso } from './constants/data'

function About() {
  const [selectedIndex, setIndex] = useState(0)
  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <main>
      <div className="h-[360px] w-full bg-about-hero bg-cover bg-center bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={AboutMenu.label} />
            <Title.Nav>
              {AboutMenu.subMenu.map((nav, index) => (
                <TitleNavItem
                  key={nav}
                  label={nav}
                  isActive={selectedIndex === index}
                  onClick={() => handleIndex(index)}
                />
              ))}
            </Title.Nav>
          </Title.Root>
          <ContentPadding>
            <Row>
              <div>
                <Paragraph>{Holding.info}</Paragraph>
              </div>
              <div className="w-full items-center justify-center">
                <Image
                  width={1000}
                  height={1000}
                  className="h-full w-full rounded-2xl"
                  src="/images/bg-hero.png"
                  alt="img"
                />
              </div>
            </Row>
          </ContentPadding>
          <ContentPadding>
            <Row>
              <div className=" relative h-[440px] w-full ">
                <Image
                  width={1000}
                  height={1000}
                  alt="img"
                  src="/images/card-1.png"
                  className=" shadow-blue-gray-900/50 absolute right-0  top-0 z-0 h-[240px] w-[380px] rounded-3xl border opacity-80 shadow-xl"
                />
                <Image
                  width={1000}
                  height={1000}
                  alt="img"
                  src="/images/card-2.png"
                  className=" shadow-blue-gray-900/50 absolute bottom-32  left-0 z-10 h-[240px] w-[380px] rounded-3xl border opacity-90 shadow-xl"
                />
                <Image
                  width={1000}
                  height={1000}
                  alt="img"
                  src="/images/bg-about.png"
                  className=" shadow-blue-gray-900/50 absolute bottom-0  right-16 z-20 h-[240px] w-[380px] rounded-3xl border shadow-xl"
                />
              </div>
              <div className="">
                <CustomAccording />
              </div>
            </Row>
          </ContentPadding>
        </PagePadding>
        <NavBrands />
        <PagePadding>
          <div id="Our History">
            <Title.Root>
              <Title.Label label={HistoryMenu.label} />
              <Title.Nav>
                {AboutMenu.subMenu.map((nav, index) => (
                  <TitleNavItem
                    key={nav}
                    label={nav}
                    isActive={selectedIndex === index}
                    onClick={() => handleIndex(index)}
                  />
                ))}
              </Title.Nav>
            </Title.Root>

            <ContentPadding>
              <Paragraph>{History.info}</Paragraph>
            </ContentPadding>
            <ContentPadding>
              <CustomTimeLine />
            </ContentPadding>
          </div>
        </PagePadding>
        <PagePadding>
          <Title.Root>
            <Title.Label label={IsoMenu.label} />
          </Title.Root>

          <ContentPadding>
            <Row>
              <div>
                <Paragraph>{Iso.info}</Paragraph>
              </div>
              <div className="flex w-full items-center justify-center">
                <Image
                  width={1000}
                  height={1000}
                  className="w-64"
                  src="/images/iso.png"
                  alt="img"
                />
              </div>
            </Row>
          </ContentPadding>
        </PagePadding>
      </Container>
    </main>
  )
}

export default About
