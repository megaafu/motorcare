import { menu } from '@/constants/headerData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../ui/Container'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import MenuHeaderItem from './MenuHeaderItem'
import MobileMenu from './MobileMenu'

const Header: React.FC = () => {

  return (
    <header className="fixed left-0 top-0 z-[1200] w-full shadow-2xl md:top-8 lg:absolute">
      <nav className="border-gray-200 bg-white">
        <Container className='max-w-screen-2xl'>
          <div className="flex flex-wrap items-center justify-between md:py-4">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  width={1475}
                  height={381}
                  src="/images/logo.png"
                  alt="MotorCare"
                  className=" h-10 w-auto "
                />
              </div>
            </Link>
            <div className="hidden items-center lg:flex md:order-2">
              <LanguageSwitcher />
            </div>
            <div className="hidden w-full items-center justify-between md:order-1 lg:flex md:w-auto">
              <MenuHeaderItem menu={menu} />
            </div>
            <div className="flex w-auto lg:hidden md:order-1">
              <MobileMenu menu={menu} />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
