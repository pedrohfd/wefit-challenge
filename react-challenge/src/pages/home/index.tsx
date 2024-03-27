import { Container, ProductCardArea } from './style'
import { Loader } from '@/components/loader'
import { useHomeController } from './controller'
import { ResourceNotFoundCard } from '@/components/resource-not-found-card'
import { SearchInput } from '@/components/search-input'
import { ProductCard } from '@/components/product-card'

export const Home = () => {
  const {
    isFetchingProducts,
    isSearchingProducts,
    search,
    setSearch,
    filteredProducts,
    searchProducts,
    products,
  } = useHomeController()

  return (
    <Container>
      {products.length === 0 && !isFetchingProducts && <ResourceNotFoundCard />}

      {products.length > 0 && !isFetchingProducts && (
        <SearchInput
          type="text"
          placeholder="Buscar filme pelo nome"
          value={search}
          onChange={setSearch}
          onBlur={searchProducts}
        />
      )}

      {isFetchingProducts && <Loader />}

      {isSearchingProducts && <Loader />}

      {filteredProducts.length > 0 &&
        !isFetchingProducts &&
        !isSearchingProducts && (
          <ProductCardArea>
            {filteredProducts.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </ProductCardArea>
        )}
    </Container>
  )
}
