import axios, { AxiosResponse } from 'axios';

export async function SendTestDrive(data:any) {
  try {
    await axios.post(`/api/test-drive`, data).then((response:AxiosResponse)=>(alert(response.data['message'])))
  } catch (error) {
    alert(error);
  }
}
