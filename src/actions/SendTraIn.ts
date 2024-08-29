import axios, { AxiosResponse } from 'axios';

export async function SendTradeIn(data: any) {
  try {
    await axios.post(`/api/trade-in`, data).then((response: AxiosResponse) => (response.data['message']))
  } catch (error) {
    return error
  }
}
