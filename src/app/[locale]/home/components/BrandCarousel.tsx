"use client";

import Image from "next/image";
import { AllBrands } from "../../about/constants/brands";
import Link from "next/link";

export default function BrandsCarousel() {
  return (
    <div className="w-full py-10 overflow-hidden">
      <div className="relative flex">
        {/* Track wrapper with infinite animation */}
        <div className="flex animate-marquee">
          {[...AllBrands.brands, ...AllBrands.brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 h-60 flex items-center justify-center p-4"
            >
              <Link
                href={brand.id == 0 ? "https://www.nissan.co.mz/" : brand.url}
                className="relative w-full bg-gray-100 h-full shadow-lg rounded-md"
                target={brand.id == 0 ? "_blank" : "_self"}
              >
                <Image
                  src={brand.img}
                  alt={brand.brand}
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
