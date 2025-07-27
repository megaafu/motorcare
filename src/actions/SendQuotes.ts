import axios, { AxiosResponse } from "axios";

interface QuoteData {
  name: string;
  phone: string;
  person_phone?: string;
  email: string;
  province: string;
  vehicle: string;
  client: string;
}

export async function SendQuotes(data: QuoteData): Promise<string | unknown> {
  try {
    const response: AxiosResponse<{ message: string }> = await axios.post("/api/quotes", data);
    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
