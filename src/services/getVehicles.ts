import api from './api'

async function getVehicles() {
  const response = await api('/vehicles')
  const data = await response.data

  return data.data
}

export default getVehicles
