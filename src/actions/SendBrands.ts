import axios, { AxiosResponse } from 'axios';

export async function SendBrand(data:any) {
  try {
    await axios.post(`/api/brand`, data).then((response:AxiosResponse)=>(alert(response.data['message'])))
  } catch (error) {
    alert(error);
  }
}
