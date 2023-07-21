import { IBlog } from '@/model/blog'
import api from './api'

async function getBlogs() {
  const response = await api('/blogs')
  const data = await response.data

  return data.data as IBlog[]
}

export default getBlogs
