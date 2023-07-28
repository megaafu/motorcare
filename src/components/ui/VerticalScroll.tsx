'use client'
import { cn } from '@/lib/util/util'
import React, { useRef, useState } from 'react'

interface VerticalScrollProps {
  className?: string
  children: React.ReactNode
}

const VerticalScroll: React.FC<VerticalScrollProps> = ({
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget
    setScrollOffset(scrollTop)
  }

  return (
    <div
      className={cn('relative w-full h-full overflow-hidden', className)}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <div
        className="flex flex-col gap-4 overflow-y-auto"
        style={{ transform: `translateY(-${scrollOffset}px)` }}
      >
        {children}
      </div>
    </div>
  )
}

export default VerticalScroll
