import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge('mx-auto max-w-screen-xl px-2 ', className)}>
      {children}
    </div>
  )
}

export default Container
