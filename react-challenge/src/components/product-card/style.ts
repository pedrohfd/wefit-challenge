import styled from 'styled-components'

export const ProductCardRoot = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[100]};

  padding: 1rem;

  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;

  div + & {
    margin-top: 1rem;
  }
`

export const ProductCardImage = styled.img`
  width: 9rem;
  height: 12rem;
`

export const ProductCardTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.zinc[500]};

  margin: 0.5rem 0;
`

export const ProductCardPrice = styled.h1`
  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};
`

export const ProductCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  margin-top: 0.5rem;

  border: none;
  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.blue[500]};

  color: ${({ theme }) => theme.colors.zinc[100]};

  font-size: 0.75rem;
  font-weight: 700;

  text-transform: uppercase;

  height: 2.5rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
