import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.slate[500]};

  height: calc(100vh - 4.6875rem);

  align-items: center;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  @media (min-width: 768px) {
    height: calc(100vh - 5.25rem);

    padding: 0 12rem;
  }
`
