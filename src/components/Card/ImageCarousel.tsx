import { BASEURL, cn } from '@/lib/util/util'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
interface ImageCarouselProps {
  className?: string
  interval: number
  transitionTime: number
  images: string[]
  autoPlay: boolean
}

const ImageCarousel = ({
  images,
  autoPlay,
  interval,
  transitionTime,
  className,
}: ImageCarouselProps) => {
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
      interval={interval}
      transitionTime={transitionTime}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="h-[300px] w-full"
          style={{ background: '#ccc' }}
        >
          <Image
            loader={() => `${BASEURL}${image}`}
            width={1080}
            height={1080}
            quality={100}
            src={`${BASEURL}${image}`}
            alt={`Image ${index}`}
            className={cn('h-full w-full rounded-t-lg bg-cover', className)}
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
