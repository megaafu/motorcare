
import { INewCar } from '@/model/newCar'
import api from './api'

async function getNovos() {
    const response = await api('/novos')
    const data = await response.data
    return data.data as INewCar[]
}

export default getNovos
