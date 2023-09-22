'use client'
import { IBanner } from '@/model/banner'
import getBanners from '@/services/getBanners'
import { useQuery } from '@tanstack/react-query'

const useBanners = () => {
    return useQuery<IBanner[]>({
        queryKey: ['destaques'],
        queryFn: () => getBanners(),
    })
}

export default useBanners
