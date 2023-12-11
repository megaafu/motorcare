import { BASEURL } from '@/lib/util/util'
import Image from 'next/image'
const CardImage = ({ image }: { image: string }) => {
  return (
    <Image
      loader={() => `${BASEURL}${image}`}
      width={4080}
      height={3072}
      quality={100}
      src={`${BASEURL}${image}`}
      alt={`Image ${image}`}
      className="h-[307px] w-full rounded-t-lg lg:bg-cover"
    />
  )
}

export default CardImage
