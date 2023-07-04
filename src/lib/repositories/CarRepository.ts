import { ICar } from '@/core/model/Car'
import ICarRepository from '@/core/repositories/ICarsRepository'
import api from '../api/api'

class CarRepository implements ICarRepository {
  async getAllCars(): Promise<ICar[]> {
    const response = await api.get('/cars')
    return response.data
  }
}

export default CarRepository
