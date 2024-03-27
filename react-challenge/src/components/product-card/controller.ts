import { cartAtom } from '@/atoms/cart'
import { useAtom } from 'jotai'

export const useProductCardController = () => {
  const [cart, setCart] = useAtom(cartAtom)

  const handleAddToCart = (
    id: number,
    title: string,
    price: number,
    image: string,
  ) => {
    setCart((cart) => {
      const product = cart.find((item) => item.id === id)

      if (product) {
        return cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...cart, { id, title, price, image, quantity: 1 }]
    })
  }

  return {
    handleAddToCart,
    cart,
  }
}
