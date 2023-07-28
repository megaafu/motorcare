'use client'
import { cn } from '@/lib/util/util'
import React, { ReactNode } from 'react'

interface PrimaryButtonProps {
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  onClick,
  children,
  type = 'button',
  disabled = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={cn(
        'font-regular hover:bg-accent inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-lg text-white',
        className,
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
