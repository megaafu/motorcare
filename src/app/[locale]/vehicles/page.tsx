"use client"

import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import useVehicles from '@/hooks/use-vehicles'
import { IUsedCar } from '@/model/usedCar'
import { useEffect, useMemo, useState } from 'react'
import CarFilter from './components/CarFilter'
import CarList from './components/CarList'



export default function UsedCars() {
  const { data, isLoading } = useVehicles()

  const carsData = useMemo(() => data ?? [], [data])

  const [filteredCarsData, setFilteredCarsData] = useState(carsData)

  const handleFilter = (filteredData: IUsedCar[]) => {
    setFilteredCarsData(filteredData)
  }

  useEffect(() => {
    setFilteredCarsData(carsData)
  }, [carsData])

  return (
    <main>
      <div className="h-[240px] w-full bg-cars-hero bg-cover bg-center bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label="All Vehicles" />
          </Title.Root>
          <CarFilter carsData={carsData} onFilter={handleFilter} />
        </PagePadding>
        <CarList carsData={filteredCarsData}
          isLoading={isLoading} />
      </Container>
    </main>
  )
}
