import { Container, ProductCardArea } from './style'
import { Loader } from '@/components/loader'
import { useHomeController } from './controller'
import { ResourceNotFoundCard } from '@/components/resource-not-found-card'
import { SearchInput } from '@/components/search-input'
import { ProductCard } from '@/components/product-card'

export const Home = () => {
  const { products, isLoading } = useHomeController()

  return (
    <Container>
      {isLoading && <Loader />}

      {products.length === 0 && <ResourceNotFoundCard />}

      {products.length > 0 && (
        <>
          <SearchInput type="search" placeholder="Buscar filme pelo nome" />

          <ProductCardArea>
            {products.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </ProductCardArea>
        </>
      )}
    </Container>
  )
}
