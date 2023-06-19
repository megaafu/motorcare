"use client"

import Container from '@/components/ui/Container'
import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import React, { useState } from 'react'
import CustomAccording from './components/According'
import Row from '../../components/ui/Row'
import Paragraph from '../../components/ui/Paragraph'
import CustomTimeLine from './components/CustomTimeLine'
import { AboutMenu, BrandsMenu, HistoryMenu, IsoMenu } from '@/data/menuData'
import AnchorMenuItem from '@/components/AnchorMenuItem'
import NavBrands from './components/NavBrands'
import SubMenu from '@/components/SubMenu'
import { History, Holding, Iso } from './data/data'

type Props = {}

function About({}: Props) {
    const [selectedIndex, setIndex] = useState(0);
    const handleIndex = (index: number) => {
        setIndex(index);
      };

  return (
    <main>
        <div className='bg-about-hero w-full h-[360px] bg-cover bg-center bg-no-repeat'>
        </div>
        <Container>
            <PagePadding>
                <SubMenu label={AboutMenu.label}>
                    {AboutMenu.subMenu.map((nav, index) => (
                        <AnchorMenuItem
                        key={nav}
                        label={nav}
                        isActive={selectedIndex === index}
                        onClick={() => handleIndex(index)}
                        />
                    ))}
                    
                </SubMenu>    
                <ContentPadding>
                    <Row>
                        <div> 
                            <Paragraph>
                                {Holding.info}
                            </Paragraph>
                        </div>
                        <div className='w-full justify-center items-center'>
                            <img className='rounded-2xl' src="images/bg-hero.png" alt="img" />
                        </div>
                    </Row>
                </ContentPadding>
                <ContentPadding>
                    <Row>
                        <div className=' relative w-full h-[440px] '>
                            <img src='images/card-1.png' className=' absolute top-0 right-0  w-[380px] h-[240px] z-0 rounded-3xl opacity-80 border shadow-xl shadow-blue-gray-900/50'  /> 
                            <img src='images/card-2.png' className=' absolute bottom-32 left-0  w-[380px] h-[240px] z-10 rounded-3xl opacity-90 border shadow-xl shadow-blue-gray-900/50'/> 
                            <img src='images/bg-about.png' className=' absolute right-16 bottom-0  w-[380px] h-[240px] z-20 rounded-3xl border shadow-xl shadow-blue-gray-900/50'/>    
                        </div>
                        <div className=''>
                            <CustomAccording/>
                        </div>
                    </Row>
                </ContentPadding>
            </PagePadding>
            <NavBrands/>
            <PagePadding>
                <div id='Our History'>
                    <SubMenu label={HistoryMenu.label}>
                        {AboutMenu.subMenu.map((nav, index) => (
                            <AnchorMenuItem
                            key={nav}
                            label={nav}
                            isActive={selectedIndex === index}
                            onClick={() => handleIndex(index)}
                            />
                        ))}
                    </SubMenu>    
                    <ContentPadding>
                        <Paragraph>
                            {History.info}
                        </Paragraph>
                    </ContentPadding>
                    <ContentPadding>
                        <CustomTimeLine/>
                    </ContentPadding>
                </div>
                
            </PagePadding>
            <PagePadding>
                <SubMenu label={IsoMenu.label}/>
                <ContentPadding>
                    <Row>
                        <div>
                            <Paragraph>
                                {Iso.info}
                            </Paragraph>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <img className='w-64' src="images/iso.png" alt="img" />
                        </div>
                    </Row>
                </ContentPadding>    
            </PagePadding>
        </Container>
    </main>
  )
}

export default About