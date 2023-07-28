import { cn } from '@/lib/util/util'
import React from 'react'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl px-4 md:px-8 lg:px-0 ', className)}>
      {children}
    </div>
  )
}

export default Container
