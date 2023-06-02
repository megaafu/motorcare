import React from 'react'

interface RowProps{
    children:React.ReactNode
}
const Row:React.FC<RowProps> = ({children}) => {
  return (
    <div className="grid grid-cols-2 gap-12 justify-between">
        {children}
    </div>
  )
}
export default Row