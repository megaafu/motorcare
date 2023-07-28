'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from '../icons/Icons'

interface CustomDatePickerProps {
  id: string
  label?: string
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ id, label }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  return (
    <div className="w-full pb-4">
      <label className="text-md mb-2 block text-light-text" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <DatePicker
          id={id}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="12/12/2012"
          className="rounded border border-black px-3 py-4 pl-10 leading-tight text-light-text shadow focus:outline-none"

        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default CustomDatePicker
