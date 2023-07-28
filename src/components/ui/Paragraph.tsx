import { cn } from '@/lib/util/util'
import React, { ReactNode } from 'react'

interface ParagraphProps {
  className?: string
  children: ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return <p className={cn('text-justify text-lg', className)}>{children}</p>
}

export default Paragraph
