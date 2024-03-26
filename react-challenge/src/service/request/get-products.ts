import { api } from '../api'

export interface GetProductsResponse {
  id: number
  title: string
  image: string
  price: number
}

export const getProducts = async () => {
  const response = await api.get<GetProductsResponse[]>('/products')

  return response.data
}
