import LateralScroll from '@/components/ui/LateralScolling'
import Row from '@/components/ui/Row'
import { Cars } from '@/constants/cars'
import React from 'react'
import CategroyItem from './CategroyItem'

interface CategoryProps {
  filter: string
}

const CategoriesList: React.FC<CategoryProps> = ({ filter }) => {
  return (
    <>
      <Row className="hidden grid-cols-4 gap-5 lg:grid">
        {Cars.cars
          .filter((car) => car.category === filter)
          .slice(0, 4)
          .map((car, index) => (
            <CategroyItem key={index} car={car} carIndex={index} />
          ))}
      </Row>
      <LateralScroll className="sm:hidden">
        {Cars.cars
          .filter((car) => car.category === filter)
          .slice(0, 4)
          .map((car, index) => (
            <CategroyItem key={index} car={car} carIndex={index} />
          ))}
      </LateralScroll>
    </>
  )
}

export default CategoriesList
