"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cancel, MenuIcon } from "../icons/Icons";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { INav } from "@/constants/headerData";
import DropDownMobile from "./DropDownMobile";

interface MenuProps {
  menu: INav[];
}

const MobileMenu = ({ menu }: MenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu-panel")) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-menu-container">
      {/* Toggle Button */}
      <button
        className="z-50 relative focus:outline-none"
        onClick={handleMenuToggle}
        aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
      >
        {isMenuOpen ? <Cancel /> : <MenuIcon />}
      </button>

      {/* Black Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu Content */}
      <div
        className={`
          mobile-menu-panel
          fixed right-0 top-0 z-50 h-screen w-[65%]
          transform overflow-y-auto bg-white shadow-xl
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col gap-4 px-6 py-20 relative">
          {/* Close Button inside panel */}
          <button
            className="absolute top-6 right-6 z-50"
            onClick={() => setMenuOpen(false)}
            aria-label={t("closeMenu")}
          >
            <Cancel />
          </button>

          {/* Menu Links */}
          {menu.map(({ menu, dropdown }, index) => (
            <div className="border-b border-gray-100 py-3" key={index}>
              {dropdown ? (
                <DropDownMobile label={menu.label} dropdown={dropdown} />
              ) : (
                <Link
                  href={menu.url}
                  onClick={handleLinkClick}
                  className="block py-2 text-md font-semibold hover:text-primary"
                >
                  {t(menu.label)}
                </Link>
              )}
            </div>
          ))}

          {/* Language Switcher at the bottom */}
          <div className="mt-auto flex justify-center pb-8">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
