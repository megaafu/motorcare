import { menu } from '@/constants/headerData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../ui/Container'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import MenuHeaderItem from './MenuHeaderItem'

const Header: React.FC = () => {
  return (
    <header className="absolute z-50 mt-11 w-full">
      <nav className="border-gray-200 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-2">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  width={0}
                  height={0}
                  src="/images/logo.svg"
                  alt="MotorCare"
                  className="h-full w-full"
                />
              </div>
            </Link>
            <div className="flex items-center md:order-2">
              <LanguageSwitcher />
            </div>
            <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
              <MenuHeaderItem menu={menu} />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
