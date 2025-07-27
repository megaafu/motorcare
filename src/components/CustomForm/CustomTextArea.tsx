import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface TextAreaProps<TFieldValues extends FieldValues>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  register?: UseFormRegister<TFieldValues>;
  name?: Path<TFieldValues>;
  required?: boolean;
}

function CustomTextArea<TFieldValues extends FieldValues>({
  id,
  label,
  register,
  name,
  required,
  ...props
}: TextAreaProps<TFieldValues>) {
  return (
    <div className="pb-8">
      <label className="mb-2 block text-sm text-light-text" htmlFor={id}>
        {`${label}${required ? " *" : ""}`}
      </label>
      <textarea
        className="w-full resize-none appearance-none rounded border border-black px-3 py-2 leading-tight text-light-text shadow focus:outline-none"
        id={id}
        rows={6}
        {...(register && name ? register(name) : {})}
        {...props}
      />
    </div>
  );
}

export default CustomTextArea;
