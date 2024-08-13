"use client"

import CustomDropdown from '@/components/CustomForm/CustomDropdown'
import Row from '@/components/ui/Row'
import { IUsedCar } from '@/model/usedCar'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'


// remove this line after working on this component
interface FilterType {
  carsData: IUsedCar[]
  onFilter: (filteredData: IUsedCar[]) => void
}

const CarFilters = ({ carsData, onFilter }: FilterType) => {
  const { register, handleSubmit } = useForm()
  const t = useTranslations('Vehicles')
  let filteredData = carsData

  const handleForm = async (cars: any) => {
    filteredData = carsData.filter((car: IUsedCar) => {
      if (!cars.carBrand.includes("Select") && !car.brand.toLowerCase().includes(cars.carBrand.toLowerCase())) {
        return false
      }

      if (!cars.carModel.includes("Select") && !car.model.toLowerCase().includes(cars.carModel.toLowerCase())) {
        return false
      }

      return true;
    })



    onFilter(filteredData)
  }

  return (
    <div className="bg-white">
      {/* Car Filters Form */}
      <form onChange={handleSubmit(handleForm)} method='POST'>
        <Row className="grid-cols-3 gap-x-4 gap-y-0 lg:grid-cols-4">
          {/* Car Brand Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-brand"
            options={[{ options: [t("brand"), 'Nissan'] }]}
            register={register}
            name='carBrand'
          />
          {/* Car Model Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-model"
            options={[{ options: [t('model'), 'Terra', 'Navara', 'Qashqai', 'Leaf'] }]}
            register={register}
            name='carModel'
          />
          {/* Car Year Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-year"
            options={[{ options: [t('year'), '2010', '2015', '2020'] }]}
            register={register}
            name='carYear'
          />
          {/* Car Transmission Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-transmission"
            options={[{ options: [t('transmission'), 'Automatic', 'Manual'] }]}
            register={register}
            name='carTransmission'
          />
          {/* Car Cylinder Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-cylinder"
            options={[{ options: [t('cylinders'), '2', '4', '8'] }]}
            register={register}
            name='carCylinder'
          />
          {/* Car Fuel Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-fuel"
            options={[{ options: [t('fuel'), 'Diesel', 'Gasoline', 'Hybrid'] }]}
          />
          {/* Car Seats Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-seats"
            options={[{ options: [t('seats'), '2', '4', '6'] }]}
          />
          {/* Car Mileage Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-mileage"
            options={[{ options: [t('mileage'), '120km', '180km', '220km'] }]}
          />
          {/* Car Status Dropdown */}

        </Row>
      </form>
    </div>
  )
}

export default CarFilters
