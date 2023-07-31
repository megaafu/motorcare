import { cn } from '@/lib/util/util'
import { ReactNode } from 'react'
interface CardProps {
  className?: string
  children: ReactNode
}
const CardRoot = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'relative w-[80vw] aspect-[4/3] rounded-lg border border-gray-200 shadow md:w-[44vw] lg:w-auto lg:aspect-auto',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default CardRoot
