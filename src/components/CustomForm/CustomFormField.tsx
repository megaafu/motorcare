import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  register?: UseFormRegister<T>;
  name?: Path<T>;
  required?: boolean;
}

const CustomFormField = <T extends FieldValues>({
  id,
  label,
  name,
  register,
  required,
  ...props
}: FormFieldProps<T>) => {
  return (
    <div className="pb-4">
      {label && (
        <label className="mb-2 block text-sm text-light-text" htmlFor={id}>
          {label} {required ? "*" : ""}
        </label>
      )}
      <input
        className="w-full appearance-none rounded border border-black px-3 py-4 leading-tight text-light-text shadow focus:outline-none"
        type="text"
        id={id}
        {...(register && name ? register(name) : {})}
        {...props}
      />
    </div>
  );
};

export default CustomFormField;
