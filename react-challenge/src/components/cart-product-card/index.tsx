import { formatCurrency } from '@/utils/format-currency'
import {
  CartProductCardBottomArea,
  CartProductCardPrice,
  CartProductCardQuantity,
  CartProductCardQuantityAdd,
  CartProductCardQuantityArea,
  CartProductCardQuantitySub,
  CartProductCardRoot,
  CartProductCardTitle,
  CartProductCardTopArea,
  CartProductCardTotalAmount,
  CartProductCardTotalAmountTitle,
} from './style'
import { TrashIcon } from '@/assets/icons/trash'
import { MinusIcon } from '@/assets/icons/minus'
import { PlusIcon } from '@/assets/icons/plus'

interface CartProductCardProps {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  removeProduct: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
}

export const CartProductCard = ({
  id,
  title,
  price,
  quantity,
  image,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
}: CartProductCardProps) => {
  return (
    <CartProductCardRoot>
      <img src={image} alt="movie cover" />

      <section>
        <CartProductCardTopArea>
          <CartProductCardTitle>{title}</CartProductCardTitle>

          <span>
            <CartProductCardPrice>{formatCurrency(price)}</CartProductCardPrice>

            <TrashIcon onClick={() => removeProduct(id)} />
          </span>
        </CartProductCardTopArea>

        <CartProductCardBottomArea>
          <CartProductCardQuantityArea>
            <CartProductCardQuantitySub
              onClick={() => {
                if (quantity === 1) {
                  removeProduct(id)
                  return
                }
                decreaseQuantity(id)
              }}
            >
              <MinusIcon />
            </CartProductCardQuantitySub>

            <CartProductCardQuantity>{quantity}</CartProductCardQuantity>

            <CartProductCardQuantityAdd onClick={() => increaseQuantity(id)}>
              <PlusIcon />
            </CartProductCardQuantityAdd>
          </CartProductCardQuantityArea>

          <span>
            <CartProductCardTotalAmountTitle>
              subtotal
            </CartProductCardTotalAmountTitle>

            <CartProductCardTotalAmount>
              {formatCurrency(price * quantity)}
            </CartProductCardTotalAmount>
          </span>
        </CartProductCardBottomArea>
      </section>
    </CartProductCardRoot>
  )
}
