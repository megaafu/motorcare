'use client'
import React from 'react'

interface CardProps {
  children: React.ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="max-w-md overflow-hidden bg-white shadow-xl">
      {children}
    </div>
  )
}

export default Card
