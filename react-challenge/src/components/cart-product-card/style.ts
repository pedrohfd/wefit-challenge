import styled from 'styled-components'

export const CartProductCardRoot = styled.div`
  display: flex;

  section {
    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }

  & + & {
    margin-top: 1rem;
  }

  img {
    width: 4rem;
  }
`

export const CartProductCardTopArea = styled.span`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-left: 1rem;

  span {
    display: flex;

    align-items: center;

    gap: 1rem;
  }
`

export const CartProductCardBottomArea = styled.span`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-left: 1rem;

  padding-right: 1rem;
`

export const CartProductCardTitle = styled.p`
  width: 100%;

  font-size: 0.875rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};
`

export const CartProductCardPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};
`

export const CartProductCardQuantityArea = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 0.6rem;
`

export const CartProductCardQuantitySub = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CartProductCardQuantity = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.slate[500]};

  height: 1.6rem;
  width: 3.6rem;

  border: 1px solid ${({ theme }) => theme.colors.zinc[300]};
  border-radius: 0.25rem;
`

export const CartProductCardQuantityAdd = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CartProductCardTotalAmountTitle = styled.p`
  text-transform: uppercase;

  font-size: 0.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.zinc[400]};
`

export const CartProductCardTotalAmount = styled.p`
  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};
`
