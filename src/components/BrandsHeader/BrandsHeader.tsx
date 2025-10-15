"use client";

import Image from "next/image";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
  className?: string;
}

export default function BrandsHeader({ logo, navLinks = [], className }: BrandsHeaderProps) {
  return (
    <header className={cn(
      "w-full bg-[#2B2525] shadow-md",
      className
    )}>
      <div className={cn(
        "container mx-auto text-white flex items-center justify-between",
        "px-4 sm:px-6 md:px-8 py-3"
      )}>
        {/* ===== Brand Logo ===== */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Brand Logo"
            width={1024}
            height={1024}
            className={cn(
              "object-contain object-center",
              "w-auto h-8 sm:h-9 md:h-12",
              "max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
            )}
            sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
            priority
          />
        </div>
        
        {/* ===== Navigation Links ===== */}
        {navLinks.length > 0 && (
          <nav className={cn(
            "hidden md:flex items-center gap-6 lg:gap-8 xl:gap-12",
            "text-xs sm:text-sm tracking-wide"
          )}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "hover:text-gray-300 transition-colors duration-200",
                  "uppercase whitespace-nowrap",
                  "px-2 py-1 rounded-md hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
        
        {/* ===== Mobile Menu Button (Optional) ===== */}
        {navLinks.length > 0 && (
          <button 
            className={cn(
              "md:hidden flex flex-col justify-center items-center w-8 h-8",
              "text-white hover:text-gray-300 transition-colors"
            )}
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="w-6 h-0.5 bg-current"></span>
          </button>
        )}
      </div>
      
      {/* ===== Mobile Navigation (Optional) ===== */}
      {navLinks.length > 0 && (
        <div className={cn(
          "md:hidden bg-[#3A3232] border-t border-white/10",
          "px-4 py-3"
        )}>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  "uppercase text-sm py-2 px-3 rounded-md hover:bg-white/10",
                  "border-b border-white/5 last:border-b-0"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}