import apiClient from '../../index'

export const getFilteredProducts = async (searchValue: string) => {
  return await apiClient.get(`/products/${searchValue}`)
}