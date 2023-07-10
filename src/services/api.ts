import axios from 'axios'

const baseUrl = 'http://localhost:3035'
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
