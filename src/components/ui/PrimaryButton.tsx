import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PrimaryButtonPropos {
  className?: string
  label: string
  type?: any
}

const PrimaryButton: React.FC<PrimaryButtonPropos> = ({
  label,
  type,
  className,
}) => {
  return (
    <button
      className={twMerge(
        'font-regular inline-flex items-center rounded-lg bg-primary px-12 py-3 text-center text-lg text-white hover:bg-ancent ',
        className,
      )}
      type={type}
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
