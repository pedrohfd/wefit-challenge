import {
  CheckoutButton,
  Container,
  Divider,
  Title,
  TitleArea,
  TotalCartAmountArea,
  TotalCartAmountTitle,
  TotalCartAmountValue,
} from './style'
import { CartProductCard } from '@/components/cart-product-card'
import { formatCurrency } from '@/utils/format-currency'
import { useCartController } from './controller'

export const Cart = () => {
  const {
    cart,
    handleRemoveFromCart,
    handleDecrementQuantity,
    handleIncrementQuantity,
  } = useCartController()

  return (
    <Container>
      <TitleArea>
        <Title>Produto</Title>
        <Title>QTD</Title>
        <Title>Subtotal</Title>
      </TitleArea>
      {cart.map((item) => (
        <CartProductCard
          key={item.id}
          {...item}
          removeProduct={handleRemoveFromCart}
          increaseQuantity={handleIncrementQuantity}
          decreaseQuantity={handleDecrementQuantity}
        />
      ))}

      <Divider />

      <TotalCartAmountArea>
        <span>
          <TotalCartAmountTitle>total</TotalCartAmountTitle>

          <TotalCartAmountValue>
            {formatCurrency(
              cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            )}
          </TotalCartAmountValue>
        </span>

        <CheckoutButton type="button">finalizar pedido</CheckoutButton>
      </TotalCartAmountArea>
    </Container>
  )
}
