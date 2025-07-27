import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import { Calendar } from "../icons/Icons";

interface CustomDatePickerProps {
  id: string;
  label?: string;
  name: string;
  value?: Date | null;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
  required?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  id,
  label,
  name,
  value,
  control,
  rules,
  required,
}) => {
  const selectedDate = value || null;

  return (
    <div className="w-full pb-4">
      <label className="mb-2 block text-sm text-light-text" htmlFor={id}>
        {`${label} ${required ? "*" : ""}`}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={selectedDate}
        rules={rules}
        render={({ field }) => (
          <section className="relative w-full ">
            <DatePicker
              id={id}
              selected={field.value}
              onChange={(date: Date | null) => {
                field.onChange(date);
              }}
              dateFormat="dd/MM/yyyy"
              className="w-full rounded border border-black px-3 py-4 leading-tight text-light-text shadow focus:outline-none"
              wrapperClassName="w-full"
            />
            <span className="absolute bottom-4 right-4">
              <Calendar />
            </span>
          </section>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;