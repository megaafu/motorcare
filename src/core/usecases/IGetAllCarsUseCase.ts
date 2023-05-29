import { ICar } from "@/core/model/Car";

interface IGetAllCarsUseCase {
  execute(): Promise<ICar[]>;
}

export default IGetAllCarsUseCase;
