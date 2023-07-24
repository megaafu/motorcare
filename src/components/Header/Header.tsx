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
    <header className="fixed left-0 top-0 z-[1200] w-full shadow-2xl md:top-8">
      <nav className="border-gray-200 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between md:py-2">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  width={1080}
                  height={1080}
                  src="/images/logo.svg"
                  alt="MotorCare"
                  className="h-16 w-32 sm:h-full sm:w-full"
                />
              </div>
            </Link>
            <div className="hidden items-center sm:flex md:order-2">
              <LanguageSwitcher />
            </div>
            <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
              <MenuHeaderItem menu={menu} />
            </div>
            <div className="flex w-auto sm:hidden md:order-1">
              <MobileMenu menu={menu} />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
