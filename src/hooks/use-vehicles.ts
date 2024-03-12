'use client'
import { IUsedCar } from '@/model/usedCar'
import getVehicles from '@/services/getVehicles'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

const useVehicles = () => {
  const locale = useLocale()
  return useQuery<IUsedCar[]>({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(locale),
  })
}

export default useVehicles
