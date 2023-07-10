import React from 'react'

interface FormFieldProps {
  id: string
  label?: string
  placeholder?: string
}

const CustomFormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
}) => {
  return (
    <div className="pb-4">
      <label className="text-md mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full appearance-none rounded border border-black px-3 py-4 leading-tight text-light-text shadow focus:outline-none"
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomFormField
