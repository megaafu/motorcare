'use client'

import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface options {
  title?: string
  options: string[]
}
interface CustomDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  id: string
  options: options[]
  className?: string
  register?: UseFormRegister<any>
  name?: string;
  required?: boolean
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  id,
  options,
  className,
  register,
  name,
  required,
  ...props

}) => {

  return (
    <div className="w-full">
      {label != null && (
        <label className="text-sm mb-2 block text-light-text" htmlFor={id}>
          {`${label} ${required ? '*' : ''}`}
        </label>
      )}

      <select
        id={id}
        className={twMerge(
          'form-select text-sm mb-2 block w-full rounded border border-black bg-white px-4 py-4 text-light-text focus:border-primary focus:outline-none',
          className,
        )}
        {...register?.(name || '')}
        {...props}
      >
        {options.map((option) => {
          return option.title != null ? (
            <optgroup label={option.title} disabled>
              {option.options.map((optionDropDown, index) => {
                return (
                  <option key={index} value={optionDropDown}>
                    {optionDropDown}
                  </option>
                )
              })}
            </optgroup>
          ) : (
            <>
              {option.options.map((optionDropDown, index) => {
                return (
                  <option key={index} value={optionDropDown}>
                    {optionDropDown}
                  </option>
                )
              })}
            </>
          )
        })}
      </select>
    </div>
  )
}

export default CustomDropdown
