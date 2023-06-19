import React from 'react'

interface TextAreaProps{
    id:string
    label:string
    placeholder:string
}

const CustomTextArea:React.FC<TextAreaProps> = ({id, label, placeholder}) => {
  return (
    <div className='pb-8'>
        <label className='block text-light-text text-md mb-2' htmlFor="name">{label}</label>
        <textarea  className='shadow resize-none appearance-none border border-black rounded w-full py-2 px-3 text-light-text leading-tight focus:outline-none' id={id} rows={6} placeholder={placeholder} />
    </div>
  )
}

export default CustomTextArea