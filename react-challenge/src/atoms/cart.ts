import { GetProductsResponse } from '@/service/request/get-products'
import { atom } from 'jotai'

interface CartItem extends GetProductsResponse {
  quantity: number
}

export const cartAtom = atom<CartItem[]>([])
