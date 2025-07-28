"use client";

import { IMenu, IMenuWithSub } from "@/constants/headerData";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown } from "../icons/Icons";

interface MobileDropdownProps {
  label: string;
  dropdown: IMenuWithSub[];
}

const MobileDropdown = ({ label, dropdown }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-md font-semibold"
      >
        {t(label)}
        <ArrowDown
          className={`h-3 w-3 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="">
          {dropdown.map((item) =>
            item.dropdown ? (
              <MobileSubDropdown
                key={item.label}
                label={item.label}
                dropdown={item.dropdown}
              />
            ) : (
              <Link
                key={item.label}
                href={item.url!}
                className="block px-6 py-2 text-md text-gray-700 hover:bg-gray-100"
              >
                {t(item.label)}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

interface MobileSubDropdownProps {
  label: string;
  dropdown: IMenu[];
}

const MobileSubDropdown = ({ label, dropdown }: MobileSubDropdownProps) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <div>
      <button
        onClick={() => setIsSubOpen(!isSubOpen)}
        className="w-full flex justify-between items-center px-6 py-2 text-md text-gray-800 font-medium"
      >
        {t(label)}
        <ArrowDown
          className={`h-3 w-3 transform transition-transform duration-300 ${
            isSubOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isSubOpen && (
        <div className="pl-8 pb-2">
          {dropdown.map((item) => (
            <Link
              key={item.label}
              href={`${locale}${item.url}`}
              className="block py-1 text-md text-gray-700 hover:underline"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
