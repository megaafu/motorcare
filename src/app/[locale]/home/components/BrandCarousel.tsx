"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AllBrands } from "../../about/constants/brands";

export default function BrandsCarousel() {

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="w-full py-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {[...AllBrands.brands, ...AllBrands.brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 h-60 flex items-center justify-center p-4 "
            >
              <div className="relative w-full bg-gray-100 h-full shadow-lg rounded-md">
                <Image
                  src={brand.img}
                  alt={brand.brand}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

