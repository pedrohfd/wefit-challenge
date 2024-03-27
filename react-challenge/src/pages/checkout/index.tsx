import { Link } from 'react-router-dom'
import { BackButton, Card, Container, Title } from './style'
import CheckoutImage from '@/assets/images/checkout.svg'

export const Checkout = () => {
  return (
    <Container>
      <Card>
        <Title>Compra realizada com sucesso!</Title>

        <img src={CheckoutImage} alt="checkout" />

        <Link to="/">
          <BackButton type="button">voltar</BackButton>
        </Link>
      </Card>
    </Container>
  )
}
