import { BASEURL } from '@/lib/util'
import axios from 'axios'

const baseUrl = BASEURL+'api/v1'
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
