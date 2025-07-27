import axios from "axios";

interface PeaceData {
  name: string;
  phone: string;
  person_phone?: string;
  email: string;
  plate: string;
  delegation: string;
  description: string;
  mileage: string;
  vin: string;
  client: string;
}

export async function SendPeace(data: PeaceData): Promise<string> {
  try {
    const response = await axios.post<{ message: string }>("/api/peace", data);
    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
