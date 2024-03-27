import { GetProductsResponse } from '@/service/request/get-products'
import { atomWithStorage } from 'jotai/utils'

interface CartItem extends GetProductsResponse {
  quantity: number
}

export const cartAtom = atomWithStorage<CartItem[]>('cart', [])
