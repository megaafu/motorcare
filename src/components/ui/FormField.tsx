import React from 'react'


interface FormField{
    id:string
    label:string
    placeholder:string
}


interface FormFieldProps {
    formfields:FormField[]
}

const CustomFormField:React.FC<FormFieldProps> = ({formfields}) => {
  return (
        <div>
            {formfields.map((formfield)=>{
                return(
                    <div className='pb-4'>
                    <label className='block text-light-text text-md mb-2' htmlFor={formfield.id}>{formfield.label}</label>
                    <input className='shadow appearance-none border border-black rounded w-full py-2 px-3 text-light-text leading-tight focus:outline-none' type="text" id={formfield.id} placeholder={formfield.placeholder} />
                    </div>
                )
            })}
        </div>
  )
}

export default CustomFormField