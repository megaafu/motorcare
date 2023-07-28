'use client'

import React, { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'
interface CustomDropdownProps {
  label?: string
  id: string
  options: string[]
  className?: string
  onSelectChange: (selectedValue: string) => void
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  id,
  options,
  className,
  onSelectChange
  
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  }
  return (
    <div className="w-full">
      <label className="text-md mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <select
        onChange={handleSelectChange}
        id={id}
        className={twMerge(
          'form-select text-md mb-2 block w-full rounded border border-black bg-white px-4 py-4 text-light-text focus:border-primary focus:outline-none',
          className,
        )}
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
