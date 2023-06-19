"use client"

import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import { BrandsMenu } from '@/data/menuData'
import React, { useState } from 'react'
import Paragraph from '../../../components/ui/Paragraph'
import Row from '../../../components/ui/Row'
import SubMenu from '@/components/SubMenu'
import SubMenuItem from '@/components/SubMenuItem'
import { AllBrands } from '../data/brands'

const NavBrands = () => {
    const [selectedIndex, setIndex] = useState(0);
    const handleIndex = (index: number) => {
        setIndex(index);
      };
    return (
        <PagePadding>
            <div id='Our Brands'>
                <SubMenu label={BrandsMenu.label}>
                    {AllBrands.brands.map((nav, index) => (
                        <SubMenuItem
                            key={nav.id}
                            label={nav.brand}
                            isActive={selectedIndex === nav.id}
                            onClick={() => handleIndex(nav.id)}
                        />
                    ))}
                </SubMenu>  
                <ContentPadding>
                    
                    <Row>
                        <div className=''>
                            <h4 className='text-2xl text-sky-700 text-bold pb-4'>{AllBrands.brands[selectedIndex].brand}</h4>
                            <Paragraph>
                                {AllBrands.brands[selectedIndex].info}                           
                            </Paragraph>
                        </div>
                        <div className='w-full flex justify-center items-center '>
                            <img className='w-[280px]' src={AllBrands.brands[selectedIndex].img} alt="img" />
                        </div>
                    </Row>
                </ContentPadding>
            </div>
        </PagePadding>
  )
}

export default NavBrands