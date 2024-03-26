import { GetProductsResponse } from '@/service/request/get-products'
import { atom } from 'jotai'

export const cartAtom = atom<GetProductsResponse[]>([])
