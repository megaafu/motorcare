import { cn } from '@/lib/util/util'
import React, { ComponentProps, ReactNode } from 'react'

type ParagraphProps = ComponentProps<'p'> & {
  className?: string
  children: ReactNode
}



const Paragraph: React.FC<ParagraphProps> = ({ children, className, ...ParagraphProps }) => {
  return <p className={cn('text-justify text-sm', className)} {...ParagraphProps}>{children}</p>
}

export default Paragraph
