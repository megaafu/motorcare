import { ReactNode } from "react"
import PrimaryButton from "../ui/PrimaryButton"

const CardButton = ({ children }: { children: ReactNode }) => {
  return (
<<<<<<< HEAD
    <div className='absolute bottom-5 right-4 md:left-4'>
=======
    <div className='absolute bottom-5 right-4 md:left-4 '>
>>>>>>> 08db434 ([MotorCare] Style: Adjust the UI to fit clients needs)
      <PrimaryButton className="w-[100%] justify-center lg:w-auto">{children}</PrimaryButton>
    </div>
  )
}

export default CardButton
