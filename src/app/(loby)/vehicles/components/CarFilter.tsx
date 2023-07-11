import CustomDropdown from '@/components/CustomForm/CustomDropdown'
import Row from '@/components/ui/Row'

const CarFilters = () => {
  return (
    <div className="bg-white">
      <Row className="mb-4 grid-cols-5 gap-x-4 gap-y-0">
        <CustomDropdown
          className="py-2"
          id="car-brand"
          options={['Nissan', 'NIUI', 'Ford']}
        />
        <CustomDropdown
          className="py-2"
          id="car-model"
          options={['Terra', 'Navara']}
        />
        <CustomDropdown
          className="py-2"
          id="car-year"
          options={['2010', '2015', '2020']}
        />
        <CustomDropdown
          className="py-2"
          id="car-transmition"
          options={['Automatic', 'Manual']}
        />
        <CustomDropdown
          className="py-2"
          id="car-cylinder"
          options={['2', '4', '8']}
        />
        <CustomDropdown
          className="py-2"
          id="car-fuel"
          options={['Diesel', 'Gasoline', 'Hybrid']}
        />
        <CustomDropdown
          className="py-2"
          id="car-seats"
          options={['2', '4', '6']}
        />
        <CustomDropdown
          className="py-2"
          id="car-milage"
          options={['120km', '180km', '220km']}
        />
        <CustomDropdown
          className="py-2"
          id="car-status"
          options={['Used', 'New']}
        />

        <div className="col-span-1 flex w-full items-center justify-end">
          <button
            type="button"
            className=" w-full bg-primary px-4 py-2 text-white  hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </Row>
    </div>
  )
}

export default CarFilters
