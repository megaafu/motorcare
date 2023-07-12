'use client'

import { cn } from '@/lib/util'
import React from 'react'
interface TitleLabelProps {
  label: string
}

const TitleLabel: React.FC<TitleLabelProps> = ({ label }) => {
  return (
    <div>
      <div className={cn('flex flex-wrap items-center justify-between')}>
        <a href="#" className="flex items-center">
          <p className="text-3xl text-primary">{label}</p>
        </a>
      </div>
    </div>
  )
}

export default TitleLabel
