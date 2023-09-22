import axios, { AxiosResponse } from 'axios';

export async function SendSuggestion(data: any) {
  try {
    await axios.post(`/api/suggestion`, data).then((response: AxiosResponse) => (response.data['message']))
  } catch (error) {
    return error
  }
}
