'use client'

import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
interface CustomDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  label?: string
  id: string
  options: string[]
  className?: string
  register?: UseFormRegister<any>;
  name?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  id,
  options,
  className,
  register,
  name,
  ...props
  
}) => {
 
  return (
    <div className="w-full">
      <label className="text-md mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className={twMerge(
          'form-select text-md mb-2 block w-full rounded border border-black bg-white px-4 py-4 text-light-text focus:border-primary focus:outline-none',
          className,
        )}
        {...register?.(name || '')}
        {...props}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default CustomDropdown
