'use client'
import { CustomForm } from '@/components/CustomForm';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast'
import { SendTradeIn } from '@/actions/SendTraIn';
import useNovos from '@/hooks/use-novos';
import { INewCar } from '@/model/newCar';

const TradeInForm = () => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    person_phone: z.string().optional(),
    email: z.string(),
    car_model: z.string(),
    car_year: z.date(),
    dealership: z.string(),
    avaliation_date: z.date(),
    mileage_now: z.string(),
    car_damage: z.string(),
    avaliation: z.string(),
    client: z.string()
  })
  type TradeInProps = z.infer<typeof schema>

  const { register, handleSubmit, control } = useForm<TradeInProps>({
    resolver: zodResolver(schema)
  })
  const handleForm = async (data: TradeInProps) => {
    const sendTestDrive = SendTradeIn(data);

    toast.promise(sendTestDrive, {
      loading: 'processando o formulário...',
      success: 'O Email foi enviado com sucesso',
      error: 'ocorreu Algum erro Enviando Email'
    }, {
      position: 'top-center',
    })

  }

  const [selectedOption, setSelectedOption] = useState('')
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue)
  }
  const t = useTranslations("Request")

  const { data } = useNovos()

  const handleNissan = (data: INewCar[] | undefined, filter: string): string[] => {
    if (data === undefined) return []
    return data
      .filter((car) => car.type === filter)
      .map((item) => item.model)
  }


  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(handleForm)} method='POST'>
        <CustomForm.Root>
          <CustomForm.DropDown
            onChange={handleSelectChange}
            label={t('client')}
            id='client'
            options={[{ options: [t('individual'), t('company')] }]}
            register={register}
            name='client'
          />
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
            placeholder=""
            register={register}
            name='phone'
            required
          />
          {selectedOption === t('company') && (
            <CustomForm.FormField
              id="person_phone"
              label={t("person_phone")}
              placeholder=""
              register={register}
              name='person_phone'
              required
            />
          )}
          <CustomForm.FormField
            id="email"
            label={t("email")}
            placeholder=""
            register={register}
            name='email'
            required
          />

          <CustomForm.DropDown
            id="car_model"
            label={t('car_model')}
            defaultValue='Selecione o Modelo'
            options={[
              {
                title: t("nissan"),
                options: handleNissan(data, "Vehicles")
              },
              {
                title: t("electrics"),
                options: ["Ariya"],
              },
            ]}
            register={register}
            name='car_model'
          />
          <CustomForm.DatePicker
            id='car_year'
            label={t("car_year")}
            control={control}
            name='car_year'
          />

          <CustomForm.FormField
            label={t("dealership")}
            id="dealership"
            placeholder=''
            register={register}
            name='dealership'
          />
          <CustomForm.FormField
            id="mileage_now"
            label={t('mileage_now')}
            placeholder=""
            register={register}
            name='mileage_now'
          />

          <CustomForm.DropDown
            id="car_damge"
            label={t('car_damage')}
            options={[{ options: [t('yes'), t('no')] }
            ]} register={register}
            name='car_damage'
          />

          <CustomForm.DatePicker
            id='avaliation_date'
            label={t("avaliation_date")}
            control={control}
            name='avaliation_date'
            required
          />

          <CustomForm.DropDown
            label={t("avaliation")}
            id="avaliation"
            defaultValue='Selecione o local'
            options={[{ options: ['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba'] }]}
            register={register}
            name='avaliation'
          />

          <div className="mt-2 flex w-ful lg:justify-end">
            <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'>{t('submit')}</PrimaryButton>
          </div>
        </CustomForm.Root>
      </form>
    </>
  )
}
export default TradeInForm
