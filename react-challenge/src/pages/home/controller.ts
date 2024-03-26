import {
  getProducts,
  GetProductsResponse,
} from '@/service/request/get-products'
import { useEffect, useState } from 'react'

export const useHomeController = () => {
  const [products, setProducts] = useState<GetProductsResponse[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getProductsRequest = async () => {
    setIsLoading(true)
    const response = await getProducts()

    setProducts(response)
    // setProducts([])
    setIsLoading(false)
  }

  useEffect(() => {
    getProductsRequest()
  }, [])

  return {
    products,
    isLoading,
  }
}
