import { CartIcon } from '@/assets/icons/cart'
import {
  Title,
  CartItemQuantity,
  HeaderRoot,
  CartTitle,
  CartInfoArea,
} from './style'

export const Header = () => {
  return (
    <HeaderRoot>
      <Title>WeMovies</Title>

      <span>
        <CartInfoArea>
          <CartTitle>Meu carrinho</CartTitle>
          <CartItemQuantity>0 itens</CartItemQuantity>
        </CartInfoArea>

        <CartIcon />
      </span>
    </HeaderRoot>
  )
}
