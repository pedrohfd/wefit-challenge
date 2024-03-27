import {
  getProducts,
  GetProductsResponse,
} from '@/service/request/get-products'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const useHomeController = () => {
  const [products, setProducts] = useState<GetProductsResponse[]>([])
  const [filteredProducts, setFilteredProducts] = useState<
    GetProductsResponse[]
  >([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const getProductsRequest = async () => {
    try {
      setIsLoading(true)

      const response = await getProducts()

      /**
       * Timeout to see load component.
       */
      setTimeout(async () => {
        setFilteredProducts(response)
        setProducts(response)

        setIsLoading(false)
      }, 1000)
    } catch (error) {
      const e = error as AxiosError

      toast.error(e.message)
    }
  }

  const searchProducts = () => {
    setIsLoading(true)

    navigate(`/search?${new URLSearchParams({ 'search-query': search })}`)

    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      ),
    )
    setIsLoading(false)
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
