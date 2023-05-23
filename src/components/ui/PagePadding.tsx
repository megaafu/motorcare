import React from 'react'

interface PagePaddingProps{
  children:React.ReactNode
}
const PagePadding:React.FC<PagePaddingProps> = ({children}) => {
  return (
      <div className="py-10">
        {children}
      </div>
  )
}

export default PagePadding