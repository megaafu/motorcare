import React from 'react'
import CustomFormField from '../../../../components/ui/FormField'
import PrimaryButton from '../../../../components/ui/PrimaryButton'
import CustomTextArea from '../../../../components/ui/CustomTextArea'

const Quote_Form = () => {
  const formfields =[
    {
      id:"name",
      label: "Name",
      placeholder: "Enter your Name"
    },
    {
      id:"phone",
      label: "Phone",
      placeholder: "Enter your Phone"
    },
    {
      id:"email",
      label: "E-mail",
      placeholder: "Enter your Email"
    },
    {
      id:"address",
      label: "Address",
      placeholder: "Enter your Address"
    },
    {
      id:"country",
      label: "Country",
      placeholder: "Enter your Country"
    },
    {
      id:"carmodel",
      label: "Car Model",
      placeholder: "Enter Car Model"
    },
    {
      id:"plate",
      label: "Plate",
      placeholder: "Enter Car Plate"
    },
    {
      id:"vin",
      label: "VIN",
      placeholder: "Enter Vehicle Identification Number"
    },
  ]
  return (
      <form  action="">
        <CustomFormField formfields={formfields}/>
        <CustomTextArea id='vin' placeholder='Enter the Vehicles Identification Number' label='VIN(Vehicles Identification Number)'/>
        <div className='w-full flex justify-end'>
          <PrimaryButton label='send' type="submit"/>
        </div>
      </form>
  )
}
export default Quote_Form