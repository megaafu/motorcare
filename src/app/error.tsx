'use client'
import { Refresh } from '@/components/icons/Icons'
import Container from '@/components/ui/Container'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col justify-center self-center ">
      <div className=" bg-slate-100">
        <Container>
          <div className=" grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center gap-4 self-center">
              <h2 className="text-5xl">{error.message}</h2>
              <div className="mt-12 flex justify-start gap-6">
                <PrimaryButton onClick={() => reset()}>
                  Refresh
                  <Refresh />
                </PrimaryButton>
                <PrimaryButton className=" border border-primary bg-transparent text-primary">
                  Go Home
                </PrimaryButton>
              </div>
            </div>
            <div className="flex justify-center gap-4 self-center">
              <h2 className="text-[300px] text-light-text opacity-0">
                {error.name}
              </h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
