'use client'
import { SendService } from '@/actions/SendService';
import { SubmitForm } from '@/actions/SubmitForm';
import { CustomForm } from '@/components/CustomForm';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ServicesForm = () => {
  const schema = z.object({
    name:z.string(),
    phone:z.string(),
    person_phone:z.string().optional(),
    email:z.string(),
    plate:z.string(),
    delegation:z.string(),
    mileage:z.string(),
    service_categories:z.string(),
    client:z.string(),
    date:z.date()
  })
  type ServicesFormProps =z.infer<typeof schema>

  const {register, handleSubmit,control} = useForm<ServicesFormProps>({
    resolver:zodResolver(schema)
  })
  const handleForm =async (data:ServicesFormProps)=>{
    await SendService(data)
    await SubmitForm(data)
  }
  const [selectedOption,setSelectedOption] = useState('')
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>)=>{
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue)
  }
  const t = useTranslations("Request")
  return (
    <form onSubmit={handleSubmit(handleForm)} method='POST'>
      <CustomForm.Root>
        <CustomForm.DropDown 
          onChange={handleSelectChange} 
          label={t('client')} 
          id='client' 
          options={[t('individual'),t('company')]}
          register={register}
          name='client'
        />
        <CustomForm.FormField
          id="name"
          label={t("name")}
          register={register}
          name='name'
        />
        <CustomForm.FormField
          id="phone"
          label={t("phone")}
          register={register}
          name='phone'
        />
        {selectedOption ===t('company') &&(
          <CustomForm.FormField
            id="person_phone"
            label={t("person_phone")}
            register={register}
            name='person_phone'
          />
        )}
        <CustomForm.FormField
          id="email"
          label={t("email")}
          register={register}
          name='email'
        />
        <CustomForm.DropDown
          label={t("service_description")}
          id="service_categories"
          options={[t('revision'), t('reparation'), t('diagnosis'), t('panel_beating'),]}
          register={register}
          name='service_categories'
        />
        <CustomForm.DropDown
          label={t("delegation")}
          id="delegation"
          options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
          register={register}
          name='delegation'
        />
        <CustomForm.DatePicker 
          id='date' 
          label='Pretended Date'
          control={control}
          name='date'
        />
        <CustomForm.FormField
          id="plate"
          label={t("plate")}
          register={register}
          name='plate'
        />
        <CustomForm.FormField
          id="mileage"
          label={t("mileage")}
          register={register}
          name='mileage'
        />
         
        <div className="mt-2 flex w-ful lg:justify-end">
          <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
        </div>
      </CustomForm.Root>
    </form>
  )
}
export default ServicesForm
