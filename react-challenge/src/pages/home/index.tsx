import { Container } from './style'
import { Loader } from '@/components/loader'
import { useHomeController } from './controller'
import { ResourceNotFoundCard } from '@/components/resource-not-found-card'
import { SearchInput } from '@/components/search-input'

export const Home = () => {
  const { products, isLoading } = useHomeController()

  return (
    <Container>
      {isLoading && <Loader />}

      {products.length === 0 && <ResourceNotFoundCard />}

      {products.length > 0 && (
        <>
          <SearchInput type="search" placeholder="Buscar filme pelo nome" />
        </>
      )}
    </Container>
  )
}
