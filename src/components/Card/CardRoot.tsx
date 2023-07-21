import { cn } from '@/lib/util'
import { ReactNode } from 'react'
interface CardProps {
  className?: string
  children: ReactNode
}
const CardRoot = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'h-auto w-[80vw]  rounded-lg border border-gray-200   shadow  lg:w-auto',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default CardRoot
