'use client'
import { SendTestDrive } from '@/actions/SendTest-Drive';
import { CustomForm } from '@/components/CustomForm';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';



const TestDriveForm = () => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    person_phone: z.string().optional(),
    email: z.string(),
    drive_number: z.string(),
    location: z.string(),
    delegation: z.string(),
    car_model: z.string(),
    drive_date: z.date(),
    client: z.string()
  })
  type TestDriveProps = z.infer<typeof schema>

  const { register, handleSubmit, control } = useForm<TestDriveProps>({
    resolver: zodResolver(schema)
  })
  const handleForm = async (data: TestDriveProps) => {
    try {
      await SendTestDrive(data);
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  }

  const [selectedOption, setSelectedOption] = useState('')
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
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
          options={[t('individual'), t('company')]}
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
          placeholder=""
          register={register}
          name='phone'
        />
        {selectedOption === t('company') && (
          <CustomForm.FormField
            id="person_phone"
            label={t("person_phone")}
            placeholder=""
            register={register}
            name='person_phone'
          />
        )}
        <CustomForm.FormField
          id="email"
          label={t("email")}
          placeholder=""
          register={register}
          name='email'
        />
        <CustomForm.DatePicker
          id="drive_date"
          label={t('drive_date')}
          control={control}
          name='drive_date'
        />
        <CustomForm.DropDown
          label={t("delegation")}
          id="delegation"
          options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
          register={register}
          name='delegation'
        />
        <CustomForm.FormField
          id="drive_number"
          label={t('drive_number')}
          placeholder=""
          register={register}
          name='drive_number'
        />
        <CustomForm.FormField
          id="car_model"
          label={t('car_model')}
          register={register}
          name='car_model'
        />
        <div className="mt-2 flex w-ful lg:justify-end">
          <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
        </div>
      </CustomForm.Root>
    </form>
  )
}
export default TestDriveForm
