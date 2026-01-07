import CardCarousel from "@/components/Card/CardCarousel";
import LateralScroll from "@/components/ui/LateralScoll";
import Row from "@/components/ui/Row";
import useVehicles from "@/hooks/use-vehicles";
import CarsSkeletion from "./CarsSkeletion";


const CarsList = () => {
  const { data, isLoading } = useVehicles();
  
  const latestCars = data 
    ? [...data].reverse().slice(0, 8) 
    : [];

  return (
    <>
      {isLoading ? (
        <CarsSkeletion />
      ) : latestCars.length > 0 ? (
        <>
          <Row className="hidden gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {latestCars.map((car) => (
              <CardCarousel 
                key={car.id || `${car.brand}-${car.model}-${car.year_model}`} 
                car={car} 
              />
            ))}
          </Row>
          
          <LateralScroll className="lg:hidden">
            {latestCars.map((car) => (
              <CardCarousel 
                key={car.id   || `${car.brand}-${car.model}-${car.year_model}`} 
                car={car} 
              />
            ))}
          </LateralScroll>
        </>
      ) : data ? (
        <div className="text-center py-8">
          <p>No vehicles available</p>
        </div>
      ) : null}
    </>
  );
};

export default CarsList;