import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
interface ImageCarouselProps {
  images: string[]
  autoPlay: boolean
}

const ImageCarousel = ({ images, autoPlay }: ImageCarouselProps) => {
  return (
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
      interval={1500}
      transitionTime={1000}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="h-[240px] w-full"
          style={{ background: '#ccc' }}
        >
          <Image
            width={1080}
            height={1080}
            src={image}
            alt={`Image ${index}`}
            className="h-full w-full rounded-t-lg"
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
