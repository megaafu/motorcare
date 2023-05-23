import React from 'react'

interface ContentPaddingProps{
  children:React.ReactNode
}
const ContentPadding:React.FC<ContentPaddingProps> = ({children}) => {
  return (
      <div className="py-6">
        {children}
      </div>
  )
}

export default ContentPadding