import axios, { AxiosResponse } from 'axios';

export async function SendQuotes(data: any) {
  try {
    await axios.post(`/api/quotes`, data).then((response: AxiosResponse) => (response.data['message']))
  } catch (error) {
    return error
  }
}
