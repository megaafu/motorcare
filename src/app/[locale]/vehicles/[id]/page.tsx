"use client"

import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import useVehicles from '@/hooks/use-vehicles'
import { IUsedCar } from '@/model/usedCar'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import VehicleSpecs from './components/VehicleSpecs'
import VehicleGallery from './components/VehicleGallery'
import LoadingState from './components/LoadingState'
import NotFound from './components/NotFound'
import { BASEURL } from '@/lib/util/util'

export default function VehicleDetailsPage() {
  const t = useTranslations('Vehicles')
  const params = useParams()
  const vehicleId = params.id as string

  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " MZN"
  }


  const { data, isLoading } = useVehicles()

  const vehicle = useMemo(() => {
    if (!data || !vehicleId) return null
    return data.find((car: IUsedCar) => car.id == vehicleId)
  }, [data, vehicleId])


  if (isLoading) {
    return <LoadingState />
  }

  if (!vehicle) {
    return <NotFound />
  }

  const images: string[] = JSON.parse(vehicle.car_image)
  return (

    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white shadow-lg"
      >
        <Container>
          <PagePadding>
            <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative "
              >
                <div className="aspect-[4/3]  overflow-hidden shadow-2xl">
                  <Image
                    loader={() => `${BASEURL}${images[0]}`}
                    src={`${BASEURL}${images[0]}`}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-bold text-lg">{currencyFormat(Number(vehicle.price))}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <Title.Root>
                    <Title.Label label={`${vehicle.brand} ${vehicle.model}`} />
                  </Title.Root>
                  <p className="text-xl text-gray-600 mb-4 mt-2">
                    {vehicle.year_model} • {vehicle.type}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {vehicle.fuel}
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      {vehicle.transmission}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                      {vehicle.color}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">{t('mileage')}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {vehicle.mileage.toLocaleString()} km
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">{t('licensePlate')}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {vehicle.license_plate}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </PagePadding>
        </Container>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16"
      >
        <Container>
          <PagePadding>
            <Title.Root >
              <Title.Label label={t('specifications')} />
            </Title.Root>
            <VehicleSpecs vehicle={vehicle} />
          </PagePadding>
        </Container>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 bg-white"
      >
        <Container>
          <PagePadding>
            <Title.Root >
              <Title.Label label={t('gallery')} />
            </Title.Root>
            <VehicleGallery vehicle={vehicle} />
          </PagePadding>
        </Container>
      </motion.section>
    </main>
  )
}
