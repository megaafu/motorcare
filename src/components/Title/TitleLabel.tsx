'use client'

import React from 'react'
interface TitleLabelProps {
  label: string
}

const TitleLabel: React.FC<TitleLabelProps> = ({ label }) => {
  return (
    <h2 className="log:font-medium w-full text-2xl font-bold text-primary lg:w-auto lg:text-3xl lg:font-normal">
      {label}
    </h2>
  )
}

export default TitleLabel
