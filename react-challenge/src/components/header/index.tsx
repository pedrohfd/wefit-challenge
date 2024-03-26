import { BasketIcon } from '@/assets/icons/basket'
import {
  Title,
  CartItemQuantity,
  HeaderRoot,
  CartTitle,
  CartInfoArea,
} from './style'
import { useAtomValue } from 'jotai'
import { cartAtom } from '@/atoms/cart'

export const Header = () => {
  const cart = useAtomValue(cartAtom)

  return (
    <HeaderRoot>
      <Title>WeMovies</Title>

      <span>
        <CartInfoArea>
          <CartTitle>Meu carrinho</CartTitle>
          <CartItemQuantity>{cart.length} itens</CartItemQuantity>
        </CartInfoArea>

        <BasketIcon />
      </span>
    </HeaderRoot>
  )
}
