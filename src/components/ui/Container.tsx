import { cn } from '@/lib/util'
import React from 'react'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl px-2 ', className)}>
      {children}
    </div>
  )
}

export default Container
