import styled from 'styled-components'

export const CartProductCardRoot = styled.div`
  display: flex;

  & + & {
    margin-top: 1rem;
  }

  img {
    width: 4rem;
  }

  @media (min-width: 768px) {
    img {
      width: 5.6rem;
    }
  }
`

export const CartProductCardContent = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 10rem 1fr;

    align-items: center;
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

    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-direction: column;

    align-items: flex-start;

    svg {
      display: none;
    }
  }
`

export const CartProductCardBottomArea = styled.span`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-left: 1rem;

  padding-right: 1rem;

  svg {
    display: none;
  }

  @media (min-width: 768px) {
    svg {
      display: block;

      cursor: pointer;
    }
  }
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

  &.web {
    display: none;
  }

  @media (min-width: 768px) {
    &.web {
      display: block;
    }

    &.mobile {
      display: none;
    }
  }
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

  @media (min-width: 768px) {
    display: none;
  }
`

export const CartProductCardTotalAmount = styled.p`
  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};
`
