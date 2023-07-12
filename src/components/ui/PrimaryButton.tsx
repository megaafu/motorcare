import { cn } from '@/lib/util'
import React, { ReactNode } from 'react'

interface PrimaryButtonPropos {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

const PrimaryButton: React.FC<PrimaryButtonPropos> = ({
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
        'font-regular inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-lg text-white hover:bg-ancent ',
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
