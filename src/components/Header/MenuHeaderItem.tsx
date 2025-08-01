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
    <>
      <ul className="relative mt-4 flex flex-col rounded-lg border border-gray-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
        {menu.slice(0, menu.length - 1).map(({ menu, dropdown }) => {
          const isActive = pathName === "/" + locale + menu.url;
          const menuItemClasses = classNames(
            "group",
            {
              "text-primary after:text-primary": isActive,
              "text-light-text after:text-light-text hover:text-primary":
                !isActive,
            },
            "transition duration-300 ease-in-out text-sm"
          );

          return (
            <li key={menu.label} className="group relative">
              {dropdown ? (
                <DropDown label={menu.label} dropdown={dropdown} />
              ) : (
                <Link href={`${menu.url}`} replace={true}>
                  <div className={menuItemClasses}>
                    <span className="mr-4 cursor-pointer">{t(menu.label)}</span>
                    {isActive && (
                      <span className="mt-1 block h-0.5 w-3/4 bg-primary" />
                    )}
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href={`${locale}${menu[menu.length - 1].menu.url}`}
        replace={true}
        className="bg-primary px-5 py-3 text-white"
      >
        {t(menu[menu.length - 1].menu.label)}
      </Link>
    </>
  );
};

export default MenuHeaderItem;
