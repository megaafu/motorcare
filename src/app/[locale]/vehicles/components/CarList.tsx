'use client'

import CardCarousel from '@/components/Card/CardCarousel'
import PagePadding from '@/components/ui/PagePadding'
import Row from '@/components/ui/Row'
import useVehicles from '@/hooks/use-vehicles'
import { Pagination } from '@mantine/core'
import { usePagination } from '@mantine/hooks'
import { useEffect, useMemo, useState } from 'react'

const ITEMS_PER_PAGE = 6
const CarList = () => {
  const { data, isLoading, isFetching, error } = useVehicles()

  const carsData = useMemo(() => data ?? [], [data])

  const [visibleResults, setVisibleResults] = useState(
    carsData.slice(0, ITEMS_PER_PAGE),
  )

  useEffect(() => {
    setVisibleResults(carsData.slice(0, ITEMS_PER_PAGE))
  }, [carsData])

  const pagination = usePagination({
    total: Math.ceil(carsData.length / ITEMS_PER_PAGE),
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * ITEMS_PER_PAGE
      const end = start + ITEMS_PER_PAGE
      setVisibleResults(carsData.slice(start, end))
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
          <div className="mt-4 lg:mt-0">
            <PagePadding>
              <Pagination
                total={Math.ceil(visibleResults.length / ITEMS_PER_PAGE)}
                value={pagination.active}
                onChange={pagination.setPage}
              />
            </PagePadding>
          </div>
        </>
      ) : null}
    </>
  )
}

export default CarList
