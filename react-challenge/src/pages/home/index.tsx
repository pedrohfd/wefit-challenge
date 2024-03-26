import { Header } from '@/components/header'
import { Container } from './style'
import { Loader } from '@/components/loader'
import { useHomeController } from './controller'
import { ResourceNotFoundCard } from '@/components/resource-not-found-card'

export const Home = () => {
  const { products, isLoading } = useHomeController()

  return (
    <Container>
      <Header />

      {isLoading && <Loader />}

      {products.length === 0 && <ResourceNotFoundCard />}
    </Container>
  )
}
