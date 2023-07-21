'use client'
import { ICar } from '@/model/Car'
import getVehicles from '@/services/getVehicles'
import { useQuery } from '@tanstack/react-query'

const useVehicles = () => {
  return useQuery<ICar[]>({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(),
  })
}

export default useVehicles
