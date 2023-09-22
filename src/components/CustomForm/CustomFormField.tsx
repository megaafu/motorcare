import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  register?: UseFormRegister<any>;
  name?: string;
}

const CustomFormField: React.FC<FormFieldProps> = ({
  id,
  label,
  name,
  register,
  ...props
}) => {
  return (
    <div className="pb-4">
      <label className="text-sm mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full appearance-none rounded border border-black px-3 py-4 leading-tight text-light-text shadow focus:outline-none"
        type="text"
        id={id}
        {...register?.(name || '')}
        {...props}
      />
    </div>
  )
}

export default CustomFormField
