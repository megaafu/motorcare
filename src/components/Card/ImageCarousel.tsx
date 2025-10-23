import { BASEURL, cn } from "@/lib/util/util";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

interface ImageCarouselProps {
  className?: string;
  interval: number;
  transitionTime: number;
  images: string[];
  autoPlay: boolean;
}

const ImageCarousel = ({
  images,
  autoPlay,
  interval,
  transitionTime,
  className,
}: ImageCarouselProps) => {
  return (
    <div className="w-full"> {/* Removed max-w-4xl mx-auto to fill card width */}
      <Carousel
        autoPlay={autoPlay}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showIndicators={true}
        showArrows={false}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        interval={interval}
        transitionTime={transitionTime}
        className="w-full h-full" // Ensure carousel fills container
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] w-full h-full" // Ensure full height
          >
            <Image
              loader={() => `${BASEURL}${image}`}
              fill // Use fill instead of width/height to cover entire container
              quality={85}
              src={`${BASEURL}${image}`}
              alt={`Image ${index + 1}`}
              className={cn(
                "object-cover", // object-cover ensures image fills container while maintaining aspect ratio
                className
              )}
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw" // Always take full width
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;