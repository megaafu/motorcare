"use client"
import { motion } from 'framer-motion'
import React from 'react'

interface CardProps{
  children:React.ReactNode
}
const Card:React.FC<CardProps> = ({children}) => {
  return (
      <div className='max-w-md bg-white overflow-hidden'>
          {children}
      </div>

  )
}

export default Card