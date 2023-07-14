import { cn } from '@/lib/util'
import React from 'react'

interface RowProps {
  className?: string
  children: React.ReactNode
}
const Row: React.FC<RowProps> = ({ children, className }) => {
  return (
    <div className={cn('grid grid-cols-2 justify-between gap-12', className)}>
      {children}
    </div>
  )
}
export default Row
