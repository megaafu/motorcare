import axios, { AxiosResponse } from "axios";

interface TestDriveData {
 name: string;
  phone: string;
  person_phone?: string;
  email: string;
  drive_number: string;
  location: string;
  car_model: string;
  drive_date: Date;
  client: string;
}

export async function SendTestDrive(data: TestDriveData): Promise<string | unknown> {
  try {
    const response: AxiosResponse<{ message: string }> = await axios.post("/api/test-drive", data);
    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
