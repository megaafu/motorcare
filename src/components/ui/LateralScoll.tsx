'use client'
import { cn } from '@/lib/util/util'
import React, { useRef, useState } from 'react'

interface LateralScrollProps {
  className?: string
  children: React.ReactNode
}

const LateralScroll: React.FC<LateralScrollProps> = ({
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollOffset] = useState(0)

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <div
        className="flex gap-4 overflow-x-auto"
        ref={containerRef}
        style={{ transform: `translateX(-${scrollOffset}px)` }}
      >
        {children}
      </div>
    </div>
  )
}

export default LateralScroll
