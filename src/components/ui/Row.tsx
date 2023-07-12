import { cn } from '@/lib/util'
import React from 'react'

interface RowProps {
  children: React.ReactNode
}
const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <div className={cn('grid grid-cols-2 justify-between gap-12')}>
      {children}
    </div>
  )
}
export default Row
