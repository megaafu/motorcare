import { mapFormData } from '@/lib/util/formDataMapper';
import { BASEURL } from '@/lib/util/util';
import axios from 'axios';

export async function SubmitForm(data: any) {
  try {
    const mappedData: any = mapFormData(data);
    await axios.post(`${BASEURL}api/v1/statistics`, mappedData).then((Response) => Response.data)

  } catch (error) {
    return error
  }
}
