'use client'
import { CustomForm } from '@/components/CustomForm'
import CustomDropdown from '@/components/CustomForm/CustomDropdown'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const TestDriveForm = () => {
  const [selectedOption,setSelectedOption] = useState('')
  const handleSelectChange = (selectedValue:string)=>{
    setSelectedOption(selectedValue)
  }
  const t = useTranslations("Request")

  return (
    <div>
      <CustomDropdown onSelectChange={handleSelectChange} label={t('client')} id='client' options={[t('individual'),t('company')]}/>
      {selectedOption === t('individual')?(<CustomForm.Root>
      <CustomForm.FormField
        id="name"
        label={t("name")}
        placeholder=""
      />
      <CustomForm.FormField
        id="phone"
        label={t("phone")}
        placeholder=""
      />
      <CustomForm.FormField
        id="email"
        label={t("email")}
        placeholder=""
      />
      <CustomForm.DatePicker
        id="drive_date"
        label={t('drive_date')}
      />
      <CustomForm.FormField
        id="drive_number"
        label={t('drive_number')}
        placeholder=""
      />
      <CustomForm.FormField
        id="location"
        label={t('location')}
        placeholder=""
      />
      <CustomForm.DropDown
        onSelectChange={handleSelectChange}
        label={t("delation")}
        id="delegation"
        options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
      />
      <CustomForm.FormField
        id="car_model"
        label={t('drive_number')}
        placeholder=""
      />
       <div className="mt-2 flex w-ful lg:justify-end">
        <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
      </div>
    </CustomForm.Root>):selectedOption === t('company')?(<CustomForm.Root>
      <CustomForm.FormField
        id="name"
        label={t("name")}
        placeholder=""
      />
      <CustomForm.FormField
        id="phone"
        label={t("phone")}
        placeholder=""
      />
      <CustomForm.FormField
        id="person_phone"
        label={t("person_phone")}
        placeholder=""
      />
      <CustomForm.FormField
        id="email"
        label={t("email")}
        placeholder=""
      />
     <CustomForm.DatePicker
        id="drive_date"
        label={t('drive_date')}
      />
      <CustomForm.FormField
        id="drive_number"
        label={t('drive_number')}
        placeholder=""
      />
      <CustomForm.FormField
        id="location"
        label={t('location')}
        placeholder=""
      />
      <CustomForm.DropDown
        onSelectChange={handleSelectChange}
        label={t("delation")}
        id="delegation"
        options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
      />
      <CustomForm.FormField
        id="car_model"
        label={t('drive_number')}
        placeholder=""
      />
       <div className="mt-2 flex w-ful lg:justify-end">
        <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
      </div>
    </CustomForm.Root>):null}
    </div>
  )
}
export default TestDriveForm
