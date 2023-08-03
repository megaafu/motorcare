import axios, { AxiosResponse } from 'axios';

export async function SendPeace(data:any) {
  try {
    await axios.post(`/api/peace`, data).then((response:AxiosResponse)=>(alert(response.data['message'])))
  } catch (error) {
    alert(error);
  }
}
