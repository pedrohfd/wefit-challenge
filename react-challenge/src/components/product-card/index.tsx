import { CartIcon } from '@/assets/icons/cart'
import {
  ProductCardRoot,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPrice,
  ProductCardButton,
} from './style'
import { formatCurrency } from '@/utils/format-currency'
import { useProductCardController } from './controller'

interface ProductCardProps {
  id: number
  title: string
  price: number
  image: string
}

export const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  const { handleAddToCart, cart } = useProductCardController()

  return (
    <ProductCardRoot>
      <ProductCardImage src={image} alt="movie cover" />

      <ProductCardTitle>{title}</ProductCardTitle>

      <ProductCardPrice>{formatCurrency(price)}</ProductCardPrice>

      <ProductCardButton
        type="button"
        onClick={() => handleAddToCart(id, title, price, image)}
        $isProductOnCard={cart.some((item) => item.id === id)}
      >
        <div>
          <CartIcon />
          {cart.find((item) => item.id === id)?.quantity ?? 0}
        </div>
        Adicionar ao carrinho
      </ProductCardButton>
    </ProductCardRoot>
  )
}
