import { ICar } from "@/core/model/Car";
import IGetAllCarsUseCase from "@/core/usecases/IGetAllCarsUseCase";
import CarRepository from "@/lib/repositories/CarRepository";
import Slider from "react-slick";

class GetAllCarsUseCase implements IGetAllCarsUseCase{
  private carRepository: CarRepository;

  constructor() {
    this.carRepository = new CarRepository();
  }

  async execute(): Promise<ICar[]> {
    const cars = await this.carRepository.getAllCars();
    return cars;
  }
}

export default GetAllCarsUseCase;
