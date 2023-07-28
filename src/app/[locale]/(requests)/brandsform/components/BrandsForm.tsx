'use client'
import { CustomForm } from '@/components/CustomForm'
import CustomDropdown from '@/components/CustomForm/CustomDropdown'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const BrandsForm = () => {
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
      <CustomForm.DatePicker id='date' label='Pretended Date'/>
      <CustomForm.DropDown
        onSelectChange={handleSelectChange}
        label={t("delation")}
        id="delegation"
        options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
      />
      <CustomForm.FormField
        id="plate"
        label={t("plate")}
        placeholder=""
      />
      <CustomForm.FormField
        id="milage"
        label={t("milage")}
        placeholder=""
      />
      <CustomForm.FormField
        id="service_description"
        label={t('service_description')}
        placeholder=""
      />
       <div className="mt-2 flex w-ful lg:justify-end">
        <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
      </div>
    </CustomForm.Root>):selectedOption ===t('company') ?(
      <CustomForm.Root>
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
      <CustomForm.DatePicker id='date' label='Pretended Date'/>
      <CustomForm.DropDown
        onSelectChange={handleSelectChange}
        label={t("delation")}
        id="delegation"
        options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
      />
      <CustomForm.FormField
        id="plate"
        label={t("plate")}
        placeholder=""
      />
      <CustomForm.FormField
        id="milage"
        label={t("milage")}
        placeholder="Enter Car Milage"
      />
      <CustomForm.FormField
        id="service_description"
        label={t('service_description')}
        placeholder=""
      />
       <div className="mt-2 flex w-ful lg:justify-end">
        <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
      </div>
    </CustomForm.Root>
    ):null}
    </div>
  )
}
export default BrandsForm
