'use client'
import { INewCar } from '@/model/newCar'
import getNovos from '@/services/getNovos'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

const useNovos = () => {
    return useQuery<INewCar[]>({
        queryKey: ['novos'],
        queryFn: () => getNovos(),
    })
}

export default useNovos
