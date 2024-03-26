import { CartIcon } from '@/assets/icons/cart'
import {
  ProductCardRoot,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPrice,
  ProductCardButton,
} from './style'
import { formatCurrency } from '@/utils/format-currency'

interface ProductCardProps {
  title: string
  price: number
  image: string
}

export const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <ProductCardRoot>
      <ProductCardImage src={image} alt="movie cover" />

      <ProductCardTitle>{title}</ProductCardTitle>

      <ProductCardPrice>{formatCurrency(price)}</ProductCardPrice>

      <ProductCardButton type="button">
        <div>
          <CartIcon />0
        </div>
        Adicionar ao carrinho
      </ProductCardButton>
    </ProductCardRoot>
  )
}
