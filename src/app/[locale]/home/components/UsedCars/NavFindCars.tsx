'use client'

import { Title } from '@/components/Title'
import PagePadding from '@/components/ui/PagePadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { FindCarsMenu } from '@/constants/menuData'
import { useTranslations } from 'next-intl'
import CarsList from './CarsList'

const NavFindCars = () => {
  const t = useTranslations("Home")
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={t(FindCarsMenu.label)} />
      </Title.Root>

      <CarsList />
      <SecundaryButton label={t('view_more')} />
    </PagePadding>
  )
}

export default NavFindCars
