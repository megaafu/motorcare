import LateralScroll from '@/components/ui/LateralScoll'
import useVehicles from '@/hooks/use-vehicles'
import React from 'react'
import CategorySkeletion from './CategorySkeletion'
import CategroyItem from './NewCarItem'
import CarSlider from './CarSlider'
import useNovos from '@/hooks/use-novos'


interface NewCarsProps {
  filter: string
}

const NewCarList: React.FC<NewCarsProps> = ({ filter }) => {

  const { data, isLoading } = useNovos()
  return (
    <>
      {isLoading ? <CategorySkeletion /> : data ? (
        <>
          <CarSlider carsData={data} isLoading={isLoading} filter={filter} />
          <LateralScroll className="lg:hidden ">
            {data
              .filter((car) => car.type === filter)
              .map((car, index) => (
                <CategroyItem key={index} car={car} carIndex={index} />
              ))}
          </LateralScroll>
        </>
      ) : null}
    </>
  )
}

export default NewCarList
