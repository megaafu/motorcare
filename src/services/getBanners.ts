import { IBanner } from '@/model/banner'
import api from './api'

async function getBanners() {
    const response = await api('/destaques')
    const data = await response.data
    return data.data as IBanner[]
}

export default getBanners