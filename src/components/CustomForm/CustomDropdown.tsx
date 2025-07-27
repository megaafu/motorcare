"use client";

import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface OptionsGroup {
  title?: string;
  options: string[];
}

interface CustomDropdownProps<T extends FieldValues>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id: string;
  defaultValue?: string;
  options: OptionsGroup[];
  className?: string;
  register?: UseFormRegister<T>;
  name?: Path<T>;
  required?: boolean;
}

const CustomDropdown = <T extends FieldValues>({
  label,
  id,
  options,
  className,
  register,
  name,
  defaultValue,
  required,
  ...props
}: CustomDropdownProps<T>) => {
  return (
    <div className="w-full">
      {label != null && (
        <label className="mb-2 block text-sm text-light-text" htmlFor={id}>
          {`${label} ${required ? "*" : ""}`}
        </label>
      )}

      <select
        id={id}
        defaultValue={defaultValue ?? ""}
        className={twMerge(
          "form-select mb-2 block w-full rounded border border-black bg-white px-4 py-4 text-sm text-light-text focus:border-primary focus:outline-none",
          className
        )}
        {...(register && name ? register(name) : {})}
        {...props}
      >
        <option value="" disabled hidden>
          {defaultValue || "Selecione uma opção"}
        </option>
        {options.map((optionGroup, groupIndex) =>
          optionGroup.title != null ? (
            <optgroup key={`group-${groupIndex}`} label={optionGroup.title}>
              {optionGroup.options.map((optionValue, optionIndex) => (
                <option key={`option-${groupIndex}-${optionIndex}`} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </optgroup>
          ) : (
            <React.Fragment key={`group-${groupIndex}`}>
              {optionGroup.options.map((optionValue, optionIndex) => (
                <option key={`option-${groupIndex}-${optionIndex}`} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </React.Fragment>
          )
        )}
      </select>
    </div>
  );
};

export default CustomDropdown;
