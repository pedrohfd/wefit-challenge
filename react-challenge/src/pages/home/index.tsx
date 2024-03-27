import { Container, ProductCardArea } from './style'
import { Loader } from '@/components/loader'
import { useHomeController } from './controller'
import { ResourceNotFoundCard } from '@/components/resource-not-found-card'
import { SearchInput } from '@/components/search-input'
import { ProductCard } from '@/components/product-card'

export const Home = () => {
  const {
    isLoading,
    search,
    setSearch,
    filteredProducts,
    searchProducts,
    products,
  } = useHomeController()

  return (
    <Container>
      {isLoading && <Loader />}

      {products.length === 0 && !isLoading && <ResourceNotFoundCard />}

      {products.length > 0 && !isLoading && (
        <SearchInput
          type="text"
          placeholder="Buscar filme pelo nome"
          value={search}
          onChange={setSearch}
          onBlur={searchProducts}
        />
      )}

      {filteredProducts.length > 0 && !isLoading && (
        <ProductCardArea>
          {filteredProducts.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </ProductCardArea>
      )}
    </Container>
  )
}
