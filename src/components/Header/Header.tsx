import { menu } from "@/constants/headerData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import MenuHeaderItem from "./MenuHeaderItem";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-[1200] w-full border-b-2 lg:absolute">
      <nav className="border-gray-200 bg-white">
        <div className="w-full mx-auto px-5 md:p7 lg:px-10 xl:container">
          <div className="flex flex-wrap items-center justify-between py-3 md:py-4">
            <Link href="/home">
              <div className="flex items-center">
                <Image
                  width={1475}
                  height={381}
                  src="/images/logo.png"
                  alt="MotorCare"
                  className="h-8 w-auto xl:h-10 flex-grow"
                  priority
                />
              </div>
            </Link>
            <div className="flexd items-center md:order-2">
              <div className="hidden lg:block">
                <LanguageSwitcher />
              </div>
              <div className="ml-4 lg:hidden">
                <MobileMenu menu={menu} />
              </div>
            </div>
            <div className="hidden w-full md:order-1 md:block md:w-auto lg:flex lg:items-center lg:justify-between">
              <MenuHeaderItem menu={menu} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;