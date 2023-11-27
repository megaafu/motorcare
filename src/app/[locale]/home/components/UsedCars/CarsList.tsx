
import CardCarousel from '@/components/Card/CardCarousel'
import LateralScroll from '@/components/ui/LateralScoll'
import Row from '@/components/ui/Row'
import useVehicles from '@/hooks/use-vehicles'
import CarsSkeletion from './CarsSkeletion'

const CarsList = () => {
  const { data, isLoading } = useVehicles()
  return (
    <>
      {isLoading ? <CarsSkeletion /> : data ? (
        <>
          <Row className="hidden gap-8 lg:grid lg:grid-cols-4">
            {data.slice(0).reverse().slice(0, 4).map((car, index) => {
              return <CardCarousel key={index} car={car} />
            })}
          </Row>
          <LateralScroll className="lg:hidden">
            {data.slice(0).reverse().slice(0, 4).map((car, index) => {
              return <CardCarousel key={index} car={car} />
            })}
          </LateralScroll>
        </>
      ) : null}
    </>
  )
}

export default CarsList
