import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import CarFilter from './components/CarFilter'
import CarList from './components/CarList'

export default async function UsedCars() {
  return (
    <main>
      <div className="h-[240px] w-full bg-cars-hero bg-cover bg-center bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label="All Vehicles" />
          </Title.Root>
          <CarFilter />
        </PagePadding>
        <PagePadding>
          <CarList />
        </PagePadding>
      </Container>
    </main>
  )
}
