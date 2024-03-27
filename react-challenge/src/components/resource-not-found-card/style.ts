import styled from 'styled-components'

export const ResourceNotFoundRoot = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.zinc[100]};

  padding: 4rem;

  border-radius: 0.25rem;

  gap: 1.5rem;

  img {
    width: 11rem;
  }

  div {
    width: 11rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.slate[500]};

    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex: 1;

    justify-content: center;

    margin-bottom: 2.5rem;

    gap: 2.5rem;

    img {
      width: 18rem;
    }

    div {
      width: 35rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.slate[500]};

      display: flex;
      justify-content: center;
    }
  }
`

export const ResourceNotFoundMessage = styled.p`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};

  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ResourceNotFoundButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  color: ${({ theme }) => theme.colors.zinc[100]};

  border: none;
  border-radius: 0.25rem;

  width: 10rem;
  height: 2.5rem;

  font-size: 0.75rem;
  font-weight: 700;

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1rem;

    width: 14rem;
    height: 3.5rem;
  }
`
