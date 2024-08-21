import apiClient from '../../index'
import { IProduct } from '../../../types'

export const getProducts = async () => {
  return await apiClient.get<IProduct[]>('/products')
}