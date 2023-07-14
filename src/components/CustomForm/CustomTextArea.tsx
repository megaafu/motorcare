import React from 'react'

interface TextAreaProps {
  id: string
  label: string
  placeholder: string
}

const CustomTextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder,
}) => {
  return (
    <div className="pb-8">
      <label className="text-md mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="w-full resize-none appearance-none rounded border border-black px-3 py-2 leading-tight text-light-text shadow focus:outline-none"
        id={id}
        rows={6}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomTextArea
