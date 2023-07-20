const CardImage = ({ image }: { image: string }) => {
  return (
    <img
      width={1080}
      height={1080}
      src={`https://cbf3-160-242-34-30.ngrok-free.app/public/${image}`}
      alt={`Image ${image}`}
      className="h-1/2 w-full rounded-t-lg"
    />
  )
}

export default CardImage
