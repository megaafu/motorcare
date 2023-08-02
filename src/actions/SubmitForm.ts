import { mapFormData } from '@/lib/util/formDataMapper';
import axios from 'axios';

export async function SubmitForm(data:any) {
  try {
    const mappedData: any = mapFormData(data);
    console.log(mappedData)
    const response = await axios.post('https://api.champier.co.mz/api/v1/statistics', mappedData);

    console.log('Response from server:', response.data);

  } catch (error) {
    console.error('Error sending form data:', error);
  }
}
