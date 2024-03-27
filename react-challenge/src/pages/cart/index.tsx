import {
  CheckoutButton,
  Container,
  Divider,
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
        <TotalCartAmountTitle>total</TotalCartAmountTitle>

        <TotalCartAmountValue>
          {formatCurrency(
            cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
          )}
        </TotalCartAmountValue>
      </TotalCartAmountArea>

      <CheckoutButton type="button">finalizar pedido</CheckoutButton>
    </Container>
  )
}
