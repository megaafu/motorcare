import { cn } from '@/lib/util'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={cn('mx-auto max-w-screen-xl px-2 ')}>{children}</div>
}

export default Container
