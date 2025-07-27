import axios, { AxiosResponse } from "axios";

interface ServiceData {
  name: string;
  phone: string;
  person_phone?: string;
  email: string;
  plate: string;
  delegation: string;
  service_categories: string;
  mileage: string;
  date: Date;
  vin: string;
  client: string;
}

export async function SendService(data: ServiceData): Promise<string | unknown> {
  try {
    const response: AxiosResponse<{ message: string }> = await axios.post("/api/service", data);
    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
