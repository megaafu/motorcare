'use client'
import { IBlog } from '@/model/blog'
import getBlogs from '@/services/getBlogs'
import { useQuery } from '@tanstack/react-query'

const useBlogs = () => {
  return useQuery<IBlog[]>({
    queryKey: ['blogs'],
    queryFn: () => getBlogs(),
  })
}

export default useBlogs
