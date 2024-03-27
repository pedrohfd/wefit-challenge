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
  const { handleAddToCart } = useProductCardController()

  return (
    <ProductCardRoot>
      <ProductCardImage src={image} alt="movie cover" />

      <ProductCardTitle>{title}</ProductCardTitle>

      <ProductCardPrice>{formatCurrency(price)}</ProductCardPrice>

      <ProductCardButton
        type="button"
        onClick={() => handleAddToCart(id, title, price, image)}
      >
        <div>
          <CartIcon />0
        </div>
        Adicionar ao carrinho
      </ProductCardButton>
    </ProductCardRoot>
  )
}
