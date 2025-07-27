"use client";

import { IMenu, IMenuWithSub } from "@/constants/headerData";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowDown } from "../icons/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface DropDownProps {
  label: string;
  dropdown: IMenuWithSub[];
}

const DropDown = ({ label, dropdown }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <div
      className="group relative text-sm text-light-text"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex cursor-pointer items-center gap-1">
        {t(label)}
        <ArrowDown className="mt-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-[2deg]" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 w-48 rounded-md bg-white py-2 shadow-lg"
          >
            {dropdown.map((item) =>
              item.dropdown ? (
                <SubDropdown
                  key={item.label}
                  label={item.label}
                  dropdown={item.dropdown}
                />
              ) : (
                <li key={item.label}>
                  <Link
                    href={`${locale}${item.url}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

interface SubDropdownProps {
  label: string;
  dropdown: IMenu[];
}

const SubDropdown = ({ label, dropdown }: SubDropdownProps) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <li
      className="group relative"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      <div className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100">
        {t(label)}
        <ArrowDown className="h-3 w-3 " />
      </div>

      <AnimatePresence>
        {isSubOpen && (
          <motion.ul
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 z-50 ml-1 w-48 rounded-md bg-white py-2 shadow-lg"
          >
            {dropdown.map((item) => (
              <li key={item.label}>
                {item.label == "nissan" ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${item.url}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {t(item.label)}
                  </a>
                ) : (
                  <Link
                    href={`${locale}${item.url}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {t(item.label)}
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DropDown;
