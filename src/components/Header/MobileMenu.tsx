"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Cancel, MenuIcon } from "../icons/Icons";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { INav } from "@/constants/headerData";
import DropDown from "./DropDown";

interface MenuProps {
  menu: INav[];
}

const MobileMenu = ({ menu }: MenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevIsOpen) => !prevIsOpen);
  };
  const t = useTranslations("Header");
  return (
    <>
      <div className="z-10" onClick={handleMenuToggle}>
        {isMenuOpen ? <Cancel /> : <MenuIcon />}
      </div>
      <div
        className={`${
          isMenuOpen
            ? "absolute bottom-0 left-[35%] right-0 top-0"
            : "absolute -right-full bottom-0 left-full top-0"
        } flex h-screen flex-col gap-5 border bg-white px-4 py-[30%] shadow-xl duration-500 ease-in`}
      >
        {menu.map(({ menu, dropdown }, index) => (
          <div className="relative" key={index}>
            <div className="text-xl font-bold">
              {dropdown ? (
                <DropDown label={menu.label} dropdown={dropdown} />
              ) : (
                <Link href={`${menu.url}`} onClick={handleMenuToggle}>
                  {t(menu.label)}
                </Link>
              )}
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
