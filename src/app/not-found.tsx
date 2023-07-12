'use client'

import Container from '@/components/ui/Container'
import Paragraph from '@/components/ui/Paragraph'
import PrimaryButton from '@/components/ui/PrimaryButton'

export default function NotFound() {
  const handleButtonClick = () => {
    window.location.href = '/'
  }
  return (
    <div className="flex h-screen flex-col justify-center self-center ">
      <div className=" bg-slate-100">
        <Container>
          <div className=" grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center gap-4 self-center">
              <h2 className="text-5xl">
                Oops! The page you are looking for could not be found.
              </h2>
              <Paragraph className="mr-24 text-light-text">
                The page you are looking for is not available in the website
                please click here to go back home
              </Paragraph>
              <div className="mt-4 flex justify-start">
                <PrimaryButton onClick={handleButtonClick}>
                  Back to Home
                </PrimaryButton>
              </div>
            </div>
            <div className="flex justify-center gap-4 self-center">
              <h2 className="text-[300px] text-light-text opacity-10">404</h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
