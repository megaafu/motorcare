import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ParagraphProps {
  className?: string
  children: ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p className={twMerge('text-justify text-lg', className)}>{children}</p>
  )
}

export default Paragraph
