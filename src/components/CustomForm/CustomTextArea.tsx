import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  register?: UseFormRegister<any>;
  name?: string;

}

const CustomTextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  register,
  name,
  ...props
}) => {
  return (
    <div className="pb-8">
      <label className="text-sm mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="w-full resize-none appearance-none rounded border border-black px-3 py-2 leading-tight text-light-text shadow focus:outline-none"
        id={id}
        rows={6}
        {...register?.(name || '')}
        {...props}
      />
    </div>
  )
}

export default CustomTextArea
