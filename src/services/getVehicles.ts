
import { IUsedCar } from '@/model/usedCar'
import api from './api'

async function getVehicles(locale: string): Promise<IUsedCar[]> {
  const response = await api(`/vehicles/${locale}`)
  const data = await response.data
  return data.data as IUsedCar[]
}

export default getVehicles
