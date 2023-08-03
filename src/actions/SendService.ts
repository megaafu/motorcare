import axios, { AxiosResponse } from 'axios';

export async function SendService(data:any) {
  try {
    await axios.post(`/api/service`, data).then((response:AxiosResponse)=>(alert(response.data['message'])))
  } catch (error) {
    alert(error);
  }
}
