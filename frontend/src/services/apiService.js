import axios from 'axios'

const axiosService = axios.create({
  baseURL: 'http://api.icndb.com/jokes',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosService.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error.response
  }
)

const service = () => {
  return {
    get: async (url) => {
      return await axiosService.get(url)
    }
  }
}

const api = service()
export default api
