import LateralScroll from '@/components/ui/LateralScoll'
import Row from '@/components/ui/Row'
import useVehicles from '@/hooks/use-vehicles'
import React from 'react'
import CategroyItem from './CategroyItem'

interface CategoryProps {
  filter: string
}

const CategoriesList: React.FC<CategoryProps> = ({ filter }) => {
  const { data } = useVehicles()
  return (
    <>
      {data ? (
        <>
          <Row className="hidden grid-cols-4 gap-5 lg:grid">
            {data
              .filter((car) => car.type === filter)
              .slice(0, 4)
              .map((car, index) => (
                <CategroyItem key={index} car={car} carIndex={index} />
              ))}
          </Row>
          <LateralScroll className="sm:hidden">
            {data
              .filter((car) => car.type === filter)
              .slice(0, 4)
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
