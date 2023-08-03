import axios, { AxiosResponse } from 'axios';

export async function SendService(data: any) {
  try {
    await axios.post(`/api/service`, data).then((response: AxiosResponse) => (response.data['message']))
  } catch (error) {
    return error
  }
}
