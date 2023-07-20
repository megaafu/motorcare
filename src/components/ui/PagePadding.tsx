import React from 'react'

interface PagePaddingProps {
  children: React.ReactNode
}
const PagePadding: React.FC<PagePaddingProps> = ({ children }) => {
  return <div className="py-4 md:py-4 lg:py-10">{children}</div>
}

export default PagePadding
