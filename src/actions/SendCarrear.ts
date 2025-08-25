import axios from "axios";

export async function SendCarrear(formData: FormData): Promise<string> {
  try {
    const response = await axios.post<{ message: string }>(`api/carrear`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred");
  }
}

