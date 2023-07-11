import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PrimaryButtonPropos {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  label: string
  className?: string
}

const PrimaryButton: React.FC<PrimaryButtonPropos> = ({
  onClick,
  label,
  type = 'button',
  disabled = false,
  className,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <button
      className={twMerge(
        'font-regular inline-flex items-center rounded-lg bg-primary px-12 py-3 text-center text-lg text-white hover:bg-ancent ',
        className,
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
      <svg
        aria-hidden="true"
        className="-mr-1 ml-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

export default PrimaryButton
