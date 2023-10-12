import LateralScroll from '@/components/ui/LateralScoll'
import Row from '@/components/ui/Row'
import useVehicles from '@/hooks/use-vehicles'
import React from 'react'
import CategorySkeletion from './CategorySkeletion'
import CategroyItem from './CategroyItem'
import CarSlider from '@/app/[locale]/vehicles/components/CarSlider'

interface CategoryProps {
  filter: string
}

const CategoriesList: React.FC<CategoryProps> = ({ filter }) => {

  const { data, isLoading } = useVehicles()
  return (
    <>
      {isLoading ? <CategorySkeletion /> : data ? (
        <>
          <CarSlider  carsData={data} isLoading={isLoading} filter={filter} />
          <LateralScroll className="lg:hidden ">
            {data
              .filter((car) => car.status === "Novo" && car.type === filter)
              .map((car, index) => (
                <CategroyItem key={index} car={car} carIndex={index} />
              ))}
          </LateralScroll>
        </>
      ) : null}
    </>
  )
}

export default CategoriesList
