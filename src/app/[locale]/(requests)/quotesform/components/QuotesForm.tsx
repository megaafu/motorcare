'use client'

import { SendQuotes } from '@/actions/SendQuotes'
import { CustomForm } from '@/components/CustomForm'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const BrandsForm = () => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    person_phone: z.string().optional(),
    email: z.string(),
    province: z.string(),
    car_model: z.string(),
    client: z.string()
  })
  type BrandsFormProps = z.infer<typeof schema>

  const { register, handleSubmit, control } = useForm<BrandsFormProps>({
    resolver: zodResolver(schema)
  })
  const handleForm = async (data: BrandsFormProps) => {
    await SendQuotes(data)
  }
  const [selectedOption, setSelectedOption] = useState('')
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue)
  }
  const t = useTranslations("Request")

  return (
    <form onSubmit={handleSubmit(handleForm)} method='POST'>
      <CustomForm.DropDown
        onChange={handleSelectChange}
        label={t('client')}
        id='client'
        options={[{ options: [t('individual'), t('company')] }]}
        register={register}
        name='client'
        required
      />
      <CustomForm.Root>
        <CustomForm.FormField
          id="name"
          label={t("name")}
          register={register}
          name='name'
          required
        />
        <CustomForm.FormField
          id="phone"
          label={t("phone")}
          register={register}
          name='phone'
          required
        />
        {selectedOption === t('company') && (
          <CustomForm.FormField
            id="person_phone"
            label={t("person_phone")}
            register={register}
            name='person_phone'
            required
          />
        )}
        <CustomForm.FormField
          id="email"
          label={t("email")}
          register={register}
          name='email'
          required
        />
        <CustomForm.DropDown
          id="province"
          label={t("province")}
          options={[{ options: ['Maputo', 'Gaza', 'Inhambane', 'Sofala', 'Manica', 'Tete', 'Nampula', 'Niassa', 'Cabo Delgado'] }]}
          register={register}
          name='province'
        />
        <CustomForm.DropDown
          label={t("car_model")}
          id="car_model"
          options={[
            {
              title: t("nissan"),
              options: ["Almera", "Magnite", "Qashqai", "X-Trail", "Navara", "Terra", "Patrol", "Urvan", "NP200", "Outra"]
            },
            {
              title: t("renault"),
              options: ["Série D", "Série C", "Série K"]
            },
            {
              title: t("electrics"),
              options: ["Leaf", "NIU",]
            },
          ]}
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
export default BrandsForm
