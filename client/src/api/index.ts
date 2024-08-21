import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 3000,
})

export default apiClient