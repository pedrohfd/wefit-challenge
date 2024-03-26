import {
  getProducts,
  GetProductsResponse,
} from '@/service/request/get-products'
import { useEffect, useState } from 'react'

export const useHomeController = () => {
  const [products, setProducts] = useState<GetProductsResponse[]>([])
  const [filteredProducts, setFilteredProducts] = useState<
    GetProductsResponse[]
  >([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')

  const getProductsRequest = async () => {
    setIsLoading(true)
    const response = await getProducts()

    setFilteredProducts(response)
    setProducts(response)
    setIsLoading(false)
  }

  const searchProducts = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      ),
    )
  }

  useEffect(() => {
    getProductsRequest()
  }, [])

  return {
    products,
    isLoading,
    search,
    setSearch,
    searchProducts,
    filteredProducts,
  }
}
