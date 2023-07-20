'use client'

import { Title } from '@/components/Title'
import PagePadding from '@/components/ui/PagePadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { FindCarsMenu } from '@/constants/menuData'
import CarsList from './CarsList'

const NavFindCars = () => {
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={FindCarsMenu.label} />
      </Title.Root>

      <CarsList />
      <SecundaryButton label="View More" />
    </PagePadding>
  )
}

export default NavFindCars
