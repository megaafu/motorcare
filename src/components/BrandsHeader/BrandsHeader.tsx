"use client";

import Image from "next/image";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavLink {
  label: string;
  href: string;
}

interface BrandsHeaderProps {
  logo: string;
  navLinks?: NavLink[];
  brandName?: string;
  className?: string;
}

export default function BrandsHeader({
  logo,
  navLinks = [],
  brandName = "",
  className,
}: BrandsHeaderProps) {
  const tBrand = useTranslations("BrandDetail");
  const t = useTranslations();
  const params = useParams();
  
  // Get the brand ID from the URL params
  const brandId = params.id as string;

  const resolveLabel = (labelKey: string) => {
    if (labelKey.startsWith("BrandDetail.")) {
      const key = labelKey.replace(/^BrandDetail\./, "");
      return tBrand(key, { brand: brandName });
    }

    try {
      return t(labelKey, { brand: brandName });
    } catch {
      return labelKey;
    }
  };

  return (
    <header className={cn("w-full bg-[#2B2525] shadow-md", className)}>
      <div
        className={cn(
          "container mx-auto text-white flex items-center justify-between",
          "px-4 sm:px-6 md:px-8"
        )}
      >
        {/* ===== Brand Logo ===== */}
        <div className="flex items-center gap-2">
          <Link href={`/brands/${brandId}`}>
            <Image
              src={logo}
              alt="Brand Logo"
              width={500}
              height={250}
              className={cn(
                "object-contain object-center",
                "w-auto h-14 sm:h-16 md:h-20 lg:h-24",
                "max-w-[250px] sm:max-w-[250px] md:max-w-[250px] lg:max-w-[250px]",
                "filter invert brightness-0",
                "cursor-pointer hover:opacity-80 transition-opacity duration-200"
              )}
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 280px, 320px"
              priority
            />
          </Link>
        </div>

        {/* ===== Navigation Links ===== */}
        {navLinks.length > 0 && (
          <nav
            className={cn(
              "hidden md:flex items-center gap-6 lg:gap-8 xl:gap-12",
              "text-sm md:text-base tracking-wide font-medium"
            )}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "hover:text-gray-300 transition-colors duration-200",
                  "uppercase whitespace-nowrap",
                  "px-3 py-2 rounded-md hover:bg-white/10"
                )}
              >
                {resolveLabel(link.label)}
              </Link>
            ))}
          </nav>
        )}

        {/* ===== Mobile Menu Button ===== */}
        {navLinks.length > 0 && (
          <button
            className={cn(
              "md:hidden flex flex-col justify-center items-center w-10 h-10",
              "text-white hover:text-gray-300 transition-colors"
            )}
            aria-label={t("Header.openMenu")}
          >
            <span className="w-7 h-0.5 bg-current mb-2"></span>
            <span className="w-7 h-0.5 bg-current mb-2"></span>
            <span className="w-7 h-0.5 bg-current"></span>
          </button>
        )}
      </div>

      {/* ===== Mobile Navigation ===== */}
      {navLinks.length > 0 && (
        <div
          className={cn(
            "md:hidden bg-primary border-t border-white/10",
            "px-4"
          )}
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  "uppercase text-base py-3 px-4 rounded-md hover:bg-white/10",
                  "border-b border-white/5 last:border-b-0"
                )}
              >
                {resolveLabel(link.label)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}