'use client'

import { Title } from '@/components/Title'
import PagePadding from '@/components/ui/PagePadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { FindCarsMenu } from '@/constants/menuData'
import { useLocale, useTranslations } from 'next-intl'
import CarsList from './CarsList'
import Link from 'next/link'

const NavFindCars = () => {
  const t = useTranslations("Home")
  const locale = useLocale()
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={t(FindCarsMenu.label)} />
      </Title.Root>
      <CarsList />
      <SecundaryButton href={`${locale}/vehicles`} label={t('view_more')} />
    </PagePadding>
  )
}

export default NavFindCars
