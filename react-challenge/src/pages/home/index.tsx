import { Header } from '@/components/header'
import { Container } from './style'
import { Loader } from '@/components/loader'
import { useHomeController } from './controller'

export const Home = () => {
  const { products } = useHomeController()

  return (
    <Container>
      <Header />

      <Loader />
    </Container>
  )
}
