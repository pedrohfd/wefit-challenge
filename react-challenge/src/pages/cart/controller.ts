import { cartAtom } from '@/atoms/cart'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

export const useCartController = () => {
  const [cart, setCart] = useAtom(cartAtom)
  const navigate = useNavigate()

  const handleRemoveFromCart = (id: number) => {
    setCart((cart) => cart.filter((item) => item.id !== id))
  }

  const handleIncrementQuantity = (id: number) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const handleDecrementQuantity = (id: number) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  const handleCheckout = () => {
    navigate('/checkout')
    setCart([])
  }

  return {
    cart,
    handleRemoveFromCart,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleCheckout,
  }
}
