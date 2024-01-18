import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Control, Controller, DeepMap, FieldError } from 'react-hook-form';
import { Calendar } from '../icons/Icons';

interface CustomDatePickerProps {
  id: string;
  label?: string;
  name: string;
  value?: Date | null;
  control: Control<any>;
  rules?: any;
  errors?: DeepMap<any, FieldError>;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  id,
  label,
  name,
  value,
  control,
  rules,
  errors,
}) => {
  const selectedDate = value || null;

  return (
    <div className="w-full pb-4">
      <label className="text-sm mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={selectedDate}
        rules={rules}
        render={({ field }) => (
          <section className='relative w-full '>
            <DatePicker
              id={id}
              selected={field.value}
              onChange={(date: Date | null) => {
                field.onChange(date);
              }}
              dateFormat="dd/MM/yyyy"
              className="rounded border w-full border-black px-3 py-4 leading-tight text-light-text shadow focus:outline-none"
              wrapperClassName='w-full'
            />
            <span className='absolute right-4 bottom-4'>
              <Calendar />
            </span>
          </section>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
