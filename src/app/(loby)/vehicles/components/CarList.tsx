'use client'

import CardCarousel from '@/components/Card/CardCarousel'
import Row from '@/components/ui/Row'
import { Cars } from '@/constants/cars'

const CarList = () => {
  // const [cars, setCars] = useState<ICar[]>([]);

  // useEffect(() => {
  // const fetchCars = async () => {
  //     try {
  //       const getAllCarsUseCase:IGetAllCarsUseCase = new GetAllCarsUseCase();
  //       const carsData = await getAllCarsUseCase.execute();
  //       setCars(carsData);
  //     }catch (error) {
  //     }
  // };

  // fetchCars();
  // }, []);

  return (
    <Row className="grid-col-1 gap-8 lg:grid-cols-3">
      {Cars.cars.map((car, index) => (
        <CardCarousel key={index} car={car} className="mx-auto w-[92vw]" />
      ))}
    </Row>
  )
}

export default CarList
