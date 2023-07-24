import axios from 'axios'

const baseUrl = 'https://api.champier.co.mz/'
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
