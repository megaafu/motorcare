import axios, { AxiosResponse } from "axios";

interface SuggestionData {
  email: string;
  name: string;
  phone: string;
  client: string;
  option: string;
  suggestions: string;
}

export async function SendSuggestion(data: SuggestionData): Promise<string | unknown> {
  try {
    const response: AxiosResponse<{ message: string }> = await axios.post("/api/suggestion", data);
    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
