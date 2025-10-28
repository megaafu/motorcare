"use client";

import { cn } from "@/lib/util/util";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselImagesProps {
  className?: string;
  interval?: number;
  transitionTime?: number;
  images: string[];
  autoPlay?: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
}

const CarouselImages = ({
  images,
  autoPlay = true,
  interval = 5000,
  transitionTime = 500,
  showArrows = true,
  showIndicators = true,
  showThumbs = false,
  className,
}: CarouselImagesProps) => {
  return (
    <div className={cn("w-full", className)}>
      <Carousel
        autoPlay={autoPlay}
        showThumbs={showThumbs}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showIndicators={showIndicators}
        showArrows={showArrows}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={interval}
        transitionTime={transitionTime}
        className="w-full h-full rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video w-full h-full"
          >
            <Image
              fill
              quality={85}
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;