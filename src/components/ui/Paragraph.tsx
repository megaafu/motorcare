import React, { ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="text-justify text-lg">{children}</p>
}

export default Paragraph
