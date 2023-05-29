import { ICar } from "@/core/model/Car";

interface ICarRepository {
  getAllCars(): Promise<ICar[]>;
}

export default ICarRepository;
