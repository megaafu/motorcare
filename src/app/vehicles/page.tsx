import Container from '@/components/ui/Container'
import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import CarFilter from './components/CarFilter'
import CarList from './components/CarList'

export default async function UsedCars() {
  return (
    <main>
      <div className="h-[240px] w-full bg-cars-hero bg-cover bg-center bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <div className="">
            <h1 className="top-72 h-[45px] text-4xl font-normal uppercase leading-[45px] text-primary ">
              Loren Ipsum
            </h1>
          </div>
          <div className="mt-4">
            <hr className="top-80 mt-4 border border-solid border-primary "></hr>
          </div>
          <ContentPadding>
            <CarFilter />
          </ContentPadding>
          <CarList />
        </PagePadding>
      </Container>
    </main>
  )
}
