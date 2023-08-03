import axios, { AxiosResponse } from 'axios';

export async function SendSugestion(data: any) {
  try {
    await axios.post(`/api/sugestion`, data).then((response: AxiosResponse) => (response.data['message']))
  } catch (error) {
    return error
  }
}
