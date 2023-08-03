'use client'
import { SendSugestion } from '@/actions/SendSugestion'
import { CustomForm } from '@/components/CustomForm'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SugestionForm = () => {
  const schema = z.object({
    name:z.string(),
    phone:z.string(),
    email:z.string(),
    sugestions:z.string(),
    client:z.string()
  })
  type SugestionFormProps =z.infer<typeof schema>
  const {register, handleSubmit} = useForm<SugestionFormProps>({
    resolver:zodResolver(schema)
  })
  const handleForm =async (data:SugestionFormProps)=>{
    await SendSugestion(data)
  }
  const t = useTranslations("Request")

  return (
    <form onSubmit={handleSubmit(handleForm)} method='POST'>
      <CustomForm.Root>
        <CustomForm.DropDown 
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
        <CustomForm.FormField
          id="email"
          label={t("email")}
          register={register}
          name='email'
        />
        <CustomForm.TextArea 
          id="sugestions" 
          label={t('sugestions')} 
          register={register}
          name='sugestions'
        />
        <div className="mt-2 flex w-ful lg:justify-end">
          <PrimaryButton type="submit" className='w-full justify-center lg:w-auto'> {t('submit')} </PrimaryButton>
        </div>
      </CustomForm.Root>
    </form>
  )
  
}
export default SugestionForm
