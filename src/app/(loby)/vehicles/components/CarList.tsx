'use client'

import CardCarousel from '@/components/Card/CardCarousel'
import PagePadding from '@/components/ui/PagePadding'
import Row from '@/components/ui/Row'
import { Cars } from '@/constants/cars'
import useVehicles from '@/hooks/use-vehicles'
import { Pagination } from '@mantine/core'
import { usePagination } from '@mantine/hooks'
import { useState } from 'react'

const ITEMS_PER_PAGE = 6
const CarList = () => {
  const { data, isLoading, isFetching, error } = useVehicles()
  const [visibleResults, setVisibleResults] = useState(
    data!.slice(0, ITEMS_PER_PAGE),
  )
  const pagination = usePagination({
    total: Math.ceil(Cars.cars.length / ITEMS_PER_PAGE),
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * ITEMS_PER_PAGE
      const end = start + ITEMS_PER_PAGE
      setVisibleResults(Cars.cars.slice(start, end))
    },
  })

  return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isFetching || isLoading ? (
        <p style={{ textAlign: 'center' }}>loading... on the client-side</p>
      ) : data ? (
        <>
          <Row className="grid-col-1 gap-8 lg:grid-cols-3">
            {visibleResults.map((car, index) => (
              <CardCarousel
                key={index}
                car={car}
                className="mx-auto w-[92vw]"
              />
            ))}
          </Row>
        </>
      ) : null}
      <div className="mt-4 lg:mt-0">
        <PagePadding>
          <Pagination
            total={Math.ceil(Cars.cars.length / ITEMS_PER_PAGE)}
            value={pagination.active}
            onChange={pagination.setPage}
          />
        </PagePadding>
      </div>
    </>
  )
}

export default CarList
