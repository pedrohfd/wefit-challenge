import {
  getProducts,
  GetProductsResponse,
} from '@/service/request/get-products'
import { useEffect, useState } from 'react'

export const useHomeController = () => {
  const [products, setProducts] = useState<GetProductsResponse[]>([])

  const getProductsRequest = async () => {
    const response = await getProducts()

    setProducts(response)
  }

  useEffect(() => {
    getProductsRequest()
  }, [])

  return {
    products,
  }
}
