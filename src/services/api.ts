import axios from 'axios'

const baseUrl = 'https://api.champier.co.mz/api/v1'
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
