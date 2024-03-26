import { describe, expect, it } from 'vitest'
import { getProducts } from './get-products'

describe('getProducts', () => {
  it('should return a list of products', async () => {
    const response = await getProducts()

    expect(response).toEqual(expect.any(Array))
  })
})
