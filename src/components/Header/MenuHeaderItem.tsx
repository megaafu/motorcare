"use client";
import { INav } from "@/constants/headerData";
import classNames from "classnames";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";
import DropDown from "./DropDown";
import Link from "next/link";

interface MenuProps {
  menu: INav[];
}

const MenuHeaderItem: React.FC<MenuProps> = ({ menu }) => {
  const pathName = usePathname();
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
      <ul className="flex flex-col md:flex-row items-center py-2 md:py-0 gap-4 md:gap-6">
        {menu.slice(0, menu.length - 1).map(({ menu, dropdown }) => {
          const isActive = pathName === "/" + locale + menu.url;
          const menuItemClasses = classNames(
            "group",
            {
              "text-secundary after:text-secundary": isActive,
              "text-light-text after:text-light-text hover:text-primary":
                !isActive,
            },
            "transition duration-300 ease-in-out"
          );

          return (
            <li key={menu.label} className="group relative">
              {dropdown ? (
                <DropDown label={menu.label} dropdown={dropdown} />
              ) : (
                <Link href={`${menu.url}`} replace={true}>
                  <div className={menuItemClasses}>
                    <span className="cursor-pointer whitespace-nowrap">
                      {t(menu.label)}
                    </span>
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href={`${menu[menu.length - 1].menu.url}`}
        replace={true}
        className="bg-primary px-4 py-2 text-white rounded-full whitespace-nowrap text-sm md:text-base"
      >
        {t(menu[menu.length - 1].menu.label)}
      </Link>
    </div>
  );
};

export default MenuHeaderItem;