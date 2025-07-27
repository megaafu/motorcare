import { mapFormData } from "@/lib/util/formDataMapper";
import { BASEURL } from "@/lib/util/util";
import axios, { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function SubmitForm(data: any): Promise<any> {
  try {
    const mappedData = mapFormData(data);

    const response: AxiosResponse = await axios.post(
      `${BASEURL}api/v1/statistics`,
      mappedData
    );

    return response.data;
  } catch (error) {
    return error;
  }
}
