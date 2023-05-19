import React from 'react'

interface ContainerNoPaddingProps{
  children:React.ReactNode
}
const ContainerNoPadding:React.FC<ContainerNoPaddingProps> = ({children}) => {
  return (
      <div className='max-w-screen-xl mx-auto'>
          {children}
      </div>
  )
}

export default ContainerNoPadding