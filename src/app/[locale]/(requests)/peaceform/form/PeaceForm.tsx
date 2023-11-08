'use client'
import { SendPeace } from '@/actions/SendPeace';
import { SubmitForm } from '@/actions/SubmitForm';
import { CustomForm } from '@/components/CustomForm';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';


const PeacesForm = () => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    person_phone: z.string().optional(),
    email: z.string(),
    plate: z.string(),
    delegation: z.string(),
    mileage: z.string(),
    service_categories: z.string(),
    client: z.string(),
  })
  type PiecesFormProps = z.infer<typeof schema>

  const { register, handleSubmit } = useForm<PiecesFormProps>({
    resolver: zodResolver(schema)
  })
  const handleForm = async (data: PiecesFormProps) => {
    const sendPeace = SendPeace(data)
    toast.promise(sendPeace, {
      loading: 'processando o formulário...',
      success: 'O Email foi enviado com sucesso',
      error: 'ocorreu Algum erro Enviando Email'
    }, {
      position: 'top-center',
    })

    const submitForm = SubmitForm(data)
    toast.promise(submitForm, {
      loading: 'Processando o formulário...',
      success: 'O formulário foi enviado com sucesso',
      error: 'ocorreu Algum erro Enviando formulário'
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
  return (
    <>
      <Toaster />
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
            />
          )}
          <CustomForm.FormField
            id="email"
            label={t("email")}
            register={register}
            name='email'
          />
          <CustomForm.DropDown
            label={t("peaces_description")}
            id="service_categories"
            options={[t('parts'), t('tires'), t('acessories')]}
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
    </>
  )
}
export default PeacesForm
