"use client"
import { IMenu } from '@/constants/headerData'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowDown } from '../icons/Icons'

interface DropDownProps {
    label: string
    dropdown: IMenu[]
}

const DropDown = ({ label, dropdown }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    const t = useTranslations('Header')
    const locale = useLocale()
    return (
        <div className='relative text-xl font-bold lg:font-normal  lg:text-light-text lg:text-sm' onClick={handleIsOpen}>
            <label className=' cursor-pointer flex gap-5' >
                {t(label)}
                <ArrowDown className=' rotate-0  lg:w-3 lg:h-3 mt-2 lg:mt-1' />
            </label>

            <ul className={`${isOpen ? ' block lg:absolute' : 'hidden'} top-full z-10 bg-white p-2  lg:shadow lg:rounded w-36`}>
                {dropdown.map(({ url, label }) => (
                    <li className=' py-2 transition duration-75  hover:text-primary'>
                        <Link href={`${locale}${url}`}>{t(label)}</Link>
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default DropDown