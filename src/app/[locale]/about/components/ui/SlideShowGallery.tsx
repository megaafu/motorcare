"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryHistoryItems, galleryItems } from "../../constants/galleryItems";

export default function SlideShowGallery() {
  const t = useTranslations("About");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="w-full relative">
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {galleryHistoryItems.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative p-4">
              <div
                className="
                  relative w-full overflow-hidden rounded-md shadow-md
                  aspect-[3/4] 
                  max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px]
                "
              >
                <Image
                  src={item.image}
                  alt={item.image}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Overlay for text and dots */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col items-center gap-3">
                  <div className="flex gap-2">
                    {galleryItems.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => emblaApi && emblaApi.scrollTo(dotIndex)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          dotIndex === selectedIndex ? "bg-secundary" : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
