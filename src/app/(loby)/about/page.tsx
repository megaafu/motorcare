'use client'

import { Title } from '@/components/Title'
import TitleNavItem from '@/components/Title/TitleNavItem'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import Paragraph from '@/components/ui/Paragraph'
import Row from '@/components/ui/Row'
import { AboutMenu, HistoryMenu, IsoMenu } from '@/constants/menuData'
import Image from 'next/image'
import { useState } from 'react'
import NavBrands from './components/NavBrands'
import CustomAccording from './components/ui/According'
import CustomTimeLine from './components/ui/CustomTimeLine'
import { History, Holding, Iso } from './constants/data'

export default function About() {
  const [selectedIndex, setIndex] = useState(0)

  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <main>
      {/* Hero section */}
      <div className="h-[360px] w-full bg-about-hero bg-cover bg-center bg-no-repeat"></div>

      <Container>
        {/* Holding Info */}
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
          <Row className="sm:grid-cols-2">
            <div>
              <Paragraph>{Holding.info}</Paragraph>
            </div>
            <div className="hidden w-full items-center justify-center lg:flex">
              <Image
                width={1000}
                height={1000}
                className="h-full w-full rounded-2xl"
                src="/images/bg-hero.png"
                alt="img"
              />
            </div>
          </Row>
        </PagePadding>

        {/* According Section */}
        <PagePadding>
          <Row className="sm:grid-cols-2">
            <div className=" hidden w-full lg:relative lg:flex lg:h-[440px] ">
              {/* Image cards */}
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
        </PagePadding>

        {/* NavBrands Section */}
        <NavBrands />

        {/* History Section */}
        <PagePadding>
          <div id="Our History" className="flex flex-col gap-8">
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
            <Paragraph>{History.info}</Paragraph>
            <CustomTimeLine />
          </div>
        </PagePadding>

        {/* Iso Section */}
        <PagePadding>
          <Title.Root>
            <Title.Label label={IsoMenu.label} />
          </Title.Root>
          <Row className="sm:grid-cols-2">
            <div>
              <Paragraph>{Iso.info}</Paragraph>
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
