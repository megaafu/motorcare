import axios, { AxiosResponse } from "axios";

interface TradeInData {
 name: string;
  phone: string;
  person_phone?: string;
  email: string;
  car_model: string;
  car_year: Date;
  dealership: string;
  avaliation_date: Date; 
  mileage_now: string;
  avaliation: string;
  car_damage: string;
  client: string;
}

export async function SendTradeIn(data: TradeInData): Promise<string | unknown> {
  try {
    const response: AxiosResponse<{ message: string }> = await axios.post("/api/trade-in", data);
    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
