import {
  getProducts,
  GetProductsResponse,
} from '@/service/request/get-products'
import { removeAccents } from '@/utils/remove-accents'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const useHomeController = () => {
  const [products, setProducts] = useState<GetProductsResponse[]>([])
  const [filteredProducts, setFilteredProducts] = useState<
    GetProductsResponse[]
  >([])
  const [isFetchingProducts, setIsFetchingProducts] = useState(false)
  const [isSearchingProducts, setIsSearchingProducts] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const getProductsRequest = async () => {
    try {
      setIsFetchingProducts(true)

      const response = await getProducts()

      /**
       * Timeout to see load component.
       */
      setTimeout(async () => {
        setFilteredProducts(response)
        setProducts(response)

        setIsFetchingProducts(false)
      }, 1000)
    } catch (error) {
      const e = error as AxiosError

      toast.error(e.message)
    }
  }

  const searchProducts = () => {
    setIsSearchingProducts(true)

    navigate(`/search?${new URLSearchParams({ 'search-query': search })}`)

    setTimeout(() => {
      setFilteredProducts(
        products.filter((product) =>
          removeAccents(product.title.toLowerCase()).includes(
            removeAccents(search.toLowerCase()),
          ),
        ),
      )
      setIsSearchingProducts(false)
    }, 400)
  }

  useEffect(() => {
    getProductsRequest()
  }, [])

  return {
    products,
    isFetchingProducts,
    isSearchingProducts,
    search,
    setSearch,
    searchProducts,
    filteredProducts,
  }
}
