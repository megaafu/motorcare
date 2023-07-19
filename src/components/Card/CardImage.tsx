import Image from 'next/image'
const CardImage = ({ image }: { image: string }) => {
  return (
    <Image
      width={1080}
      height={1080}
      src={image}
      alt={`Image ${image}`}
      className="h-1/2 w-full rounded-t-lg"
    />
  )
}

export default CardImage
