'use client'
import { cn } from '@/lib/util/util'
import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn('max-w-md overflow-hidden bg-white shadow-xl', className)}
    >
      {children}
    </div>
  )
}

export default Card
