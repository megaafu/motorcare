import React from 'react'

interface ContainerProps{
  children:React.ReactNode
}
const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='py-10'>
      <div className='max-w-screen-xl mx-auto'>
          {children}
      </div>
    </div>
  )
}

export default Container