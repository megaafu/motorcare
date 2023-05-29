import { ICar } from "@/core/model/Car";
import api from "../api/api";
import ICarRepository from "@/core/repositories/ICarsRepository";


class CarRepository implements ICarRepository{
  async getAllCars(): Promise<ICar[]> {
    const response = await api.get('/cars');
    return response.data;
  }
}

export default CarRepository;
