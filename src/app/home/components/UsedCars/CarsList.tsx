import CardCarousel from '@/components/Card/CardCarousel'
import ContentPadding from '@/components/ui/ContentPadding'
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
    <ContentPadding>
      <div className="grid grid-cols-3 gap-8">
        {Cars.cars.slice(0, 3).map((car, index) => {
          return <CardCarousel key={index} car={car} />
        })}
      </div>
    </ContentPadding>
  )
}

export default CarsList
