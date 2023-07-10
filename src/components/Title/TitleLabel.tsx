'use client'

import React, { ReactNode } from 'react'
interface TitleLabelProps {
  label: string
  children?: ReactNode
}

const TitleLabel: React.FC<TitleLabelProps> = ({ label, children }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <p className="text-3xl text-primary">{label}</p>
        </a>
      </div>
    </div>
  )
}

export default TitleLabel
