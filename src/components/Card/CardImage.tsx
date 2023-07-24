import { BASEURL } from '@/lib/util'
import Image from 'next/image'
const CardImage = ({ image }: { image: string }) => {
  console.log(image)
  return (
    <Image
      loader={() => `${BASEURL}${image}`}
      width={1080}
      height={1080}
      quality={100}
      src={`${BASEURL}${image}`}
      alt={`Image ${image}`}
      className="h-fit w-full rounded-t-lg lg:bg-cover"
    />
  )
}

export default CardImage
