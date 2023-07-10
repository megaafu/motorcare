import React from 'react'
import { twMerge } from 'tailwind-merge'

interface RowProps {
  className?: string
  children: React.ReactNode
}
const Row: React.FC<RowProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge('grid grid-cols-2 justify-between gap-12', className)}
    >
      {children}
    </div>
  )
}
export default Row
