import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.slate[500]};

  align-items: center;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 0 12rem;
    padding-bottom: 2rem;
  }
`

export const ProductCardArea = styled.section`
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    display: grid;

    gap: 1rem;

    grid-template-columns: repeat(3, 1fr);

    width: 100%;
  }
`
