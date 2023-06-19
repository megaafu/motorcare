"use client"

import React, {useState } from 'react'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { FindCarsMenu } from '@/data/menuData'
import SubMenu from '@/components/SubMenu'
import SubMenuItem from '@/components/SubMenuItem'
import CarsList from './CarsList'





const NavFindCars = () => {

    const [selectedIndex, setIndex] = useState(0);
    const handleIndex = (index: number) => {
        setIndex(index);
    };

    return (
        <>
            <SubMenu label={FindCarsMenu.label}>
                {FindCarsMenu.subMenu.map((nav, index) => (
                    <SubMenuItem
                        key={nav}
                        label={nav}
                        isActive={selectedIndex === index}
                        onClick={() => handleIndex(index)}
                    />
                ))}
            </SubMenu>
            <CarsList/>
            <SecundaryButton/>
        </>
    )
}

export default NavFindCars