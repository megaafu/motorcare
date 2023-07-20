import CustomDropdown from '@/components/CustomForm/CustomDropdown'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Row from '@/components/ui/Row'

const CarFilters = () => {
  return (
    <div className="bg-white">
      {/* Car Filters Form */}
      <form>
        <Row className="grid-cols-3 gap-x-4 gap-y-0 lg:grid-cols-5">
          {/* Car Brand Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-brand"
            options={['Nissan', 'NIUI', 'Ford']}
          />
          {/* Car Model Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-model"
            options={['Terra', 'Navara']}
          />
          {/* Car Year Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-year"
            options={['2010', '2015', '2020']}
          />
          {/* Car Transmission Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-transmission"
            options={['Automatic', 'Manual']}
          />
          {/* Car Cylinder Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-cylinder"
            options={['2', '4', '8']}
          />
          {/* Car Fuel Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-fuel"
            options={['Diesel', 'Gasoline', 'Hybrid']}
          />
          {/* Car Seats Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-seats"
            options={['2', '4', '6']}
          />
          {/* Car Mileage Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-mileage"
            options={['120km', '180km', '220km']}
          />
          {/* Car Status Dropdown */}
          <CustomDropdown
            className="py-2"
            id="car-status"
            options={['Used', 'New']}
          />

          {/* Search Button */}
          <div className="col-span-3 mt-4 flex w-full items-center justify-end lg:col-span-1  lg:mt-0">
            <PrimaryButton className="w-full justify-center">
              Search
            </PrimaryButton>
          </div>
        </Row>
      </form>
    </div>
  )
}

export default CarFilters
