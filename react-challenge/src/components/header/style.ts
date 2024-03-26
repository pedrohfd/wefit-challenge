import styled from 'styled-components'

export const HeaderRoot = styled.header`
  background: ${({ theme }) => theme.colors.slate[500]};

  display: flex;

  width: 100%;

  padding: 1.5rem 0;

  justify-content: space-between;

  span {
    display: flex;

    align-items: center;

    gap: 1rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.zinc[100]};
`

export const CartInfoArea = styled.section`
  @media (min-width: 768px) {
    display: flex;

    flex-direction: column;

    align-items: flex-end;
  }
`

export const CartTitle = styled.h2`
  display: none;

  @media (min-width: 768px) {
    display: inline;

    color: ${({ theme }) => theme.colors.zinc[100]};

    font-size: 0.875rem;
    font-weight: 600;
  }
`

export const CartItemQuantity = styled.section`
  font-size: 0.75rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.zinc[400]};
`
