import CarousellCardSkeletion from '@/components/Skeletion/CarousellCardSkeletion'
import PagePadding from '@/components/ui/PagePadding'
import Row from '@/components/ui/Row'

const CarsSkeletion = () => {
  const totalItems = 6
  const items = new Array(totalItems).fill(null)
  return (
    <PagePadding>
<<<<<<< HEAD
      <Row className="grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((car, index) => (
          <CarousellCardSkeletion className='mx-auto w-[92vw] lg:w-auto' />
        ))}
      </Row>
=======
        <Row className="grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map(() => (
                <CarousellCardSkeletion className='mx-auto w-[92vw] lg:w-auto'/>
            ))}
        </Row>
>>>>>>> 08db434 ([MotorCare] Style: Adjust the UI to fit clients needs)
    </PagePadding>
  )
}

export default CarsSkeletion
