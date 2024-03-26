import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.slate[500]};

  height: 100vh;

  align-items: center;

  display: flex;
  flex-direction: column;
`
