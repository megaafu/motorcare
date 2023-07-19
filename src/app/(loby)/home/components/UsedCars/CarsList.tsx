import CardCarousel from '@/components/Card/CardCarousel'
import LateralScroll from '@/components/ui/LateralScolling'
import Row from '@/components/ui/Row'
import { Cars } from '@/constants/cars'

const CarsList = () => {
  // const [cars, setCars] = useState<ICar[]>([]);

  // useEffect(() => {
  // const fetchCars = async () => {
  //     try {
  //         const getAllCarsUseCase: IGetAllCarsUseCase = new GetAllCarsUseCase();
  //         const carsData = await getAllCarsUseCase.execute();
  //         setCars(carsData);
  //     } catch (error) {
  //     }
  // };

  // fetchCars();
  // }, []);
  return (
    <>
      <Row className="hidden gap-8 lg:grid lg:grid-cols-3">
        {Cars.cars.slice(0, 3).map((car, index) => {
          return <CardCarousel key={index} car={car} />
        })}
      </Row>
      <LateralScroll className="sm:hidden">
        {Cars.cars.slice(0, 3).map((car, index) => {
          return <CardCarousel key={index} car={car} />
        })}
      </LateralScroll>
    </>
  )
}

export default CarsList
