'use client'
import { SendSuggestion } from '@/actions/SendSuggestion'
import { CustomForm } from '@/components/CustomForm'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { z } from 'zod'

const SuggestionForm = () => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    option: z.string(),
    suggestions: z.string(),
    client: z.string()
  })
  type SuggestionFormProps = z.infer<typeof schema>
  const { register, handleSubmit } = useForm<SuggestionFormProps>({
    resolver: zodResolver(schema)
  })
  const handleForm = async (data: SuggestionFormProps) => {
    const sendSugestion = SendSuggestion(data)
    toast.promise(sendSugestion, {
      loading: 'processando o formulário...',
      success: 'O Email foi enviado com sucesso',
      error: 'ocorreu Algum erro Enviando Email'
    }, {
      position: 'top-center',
    })
  }
  const t = useTranslations("Request")

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(handleForm)} method='POST'>
        <CustomForm.Root>
          <CustomForm.DropDown
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
            register={register}
            name='phone'
            required
          />
          <CustomForm.FormField
            id="email"
            label={t("email")}
            register={register}
            name='email'
          />
          <CustomForm.DropDown
            label={t("suggestions")}
            id="option"
            options={[{ options: [t("suggestion"), t("complain")] }]}
            register={register}
            name='option'
          />
          <CustomForm.TextArea
            id="suggestions"
            label=""
            register={register}
            name='suggestions'
          />
          <div className="mt-2 flex w-ful lg:justify-end">
            <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'> {t('submit')} </PrimaryButton>
          </div>
        </CustomForm.Root>
      </form>
    </>
  )

}
export default SuggestionForm
