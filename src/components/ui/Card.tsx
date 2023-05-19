import React from 'react'

interface CardProps{
  children:React.ReactNode
}
const Card:React.FC<CardProps> = ({children}) => {
  return (
      <div className='border border-gray-200 rounded-lg shadow'>
          {children}
      </div>

  )
}

export default Card