import Row from '@/components/ui/Row'
import { Cars } from '@/constants/cars'
import React from 'react'
import CategroyItem from './CategroyItem'

interface CategoryProps {
  filter: string
}

const CategoriesList: React.FC<CategoryProps> = ({ filter }) => {
  return (
    <Row className=" grid-cols-4 gap-2">
      {Cars.cars
        .filter((car) => car.category === filter)
        .slice(0, 4)
        .map((car, index) => (
          <CategroyItem key={index} car={car} index={index} />
        ))}
    </Row>
  )
}

export default CategoriesList
