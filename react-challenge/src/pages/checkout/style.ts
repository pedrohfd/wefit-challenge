import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 5.25rem);

  padding-bottom: 2.5rem;

  display: flex;

  align-items: flex-start;
  justify-content: center;
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[100]};
  margin: 1rem;

  display: flex;
  flex-direction: column;

  padding: 4rem;

  gap: 1.5rem;

  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;

  img {
    width: 14rem;
  }

  @media (min-width: 768px) {
    margin: 0 12rem;

    height: 100%;
    width: 100%;

    img {
      width: 24rem;
    }
  }
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};

  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const BackButton = styled.button`
  height: 2.5rem;
  width: 11rem;

  border: none;
  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.blue[500]};

  color: ${({ theme }) => theme.colors.zinc[100]};

  font-size: 0.75rem;
  font-weight: 700;

  text-transform: uppercase;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 15rem;
    height: 3rem;

    font-size: 0.875rem;
  }
`
