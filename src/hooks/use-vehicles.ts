'use client'
import { IUsedCar } from '@/model/usedCar'
import getVehicles from '@/services/getVehicles'
import { useQuery } from '@tanstack/react-query'

const useVehicles = () => {
  return useQuery<IUsedCar[]>({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(),
  })
}

export default useVehicles
