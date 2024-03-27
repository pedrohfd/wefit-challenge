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
import { Link } from 'react-router-dom'

export const Header = () => {
  const cart = useAtomValue(cartAtom)

  return (
    <HeaderRoot>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title>WeMovies</Title>
      </Link>

      <span>
        <CartInfoArea>
          <CartTitle>Meu carrinho</CartTitle>
          <CartItemQuantity>{cart.length} itens</CartItemQuantity>
        </CartInfoArea>

        <Link to="/cart">
          <BasketIcon />
        </Link>
      </span>
    </HeaderRoot>
  )
}
