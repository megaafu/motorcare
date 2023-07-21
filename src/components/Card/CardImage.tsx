import Image from 'next/image'
const CardImage = ({ image }: { image: string }) => {
  return (
    <Image
      loader={() => `http://localhost:8000/${image}`}
      width={1080}
      height={1080}
      quality={100}
      src={`http://localhost:8000/${image}`}
      alt={`Image ${image}`}
      className="h-fit w-full rounded-t-lg lg:bg-cover"
    />
  )
}

export default CardImage
