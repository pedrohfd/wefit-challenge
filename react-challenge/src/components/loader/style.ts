import styled, { keyframes } from 'styled-components'

const loadAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Container = styled.div`
  --mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;

  width: 5rem;

  padding: 0.3rem;

  aspect-ratio: 1;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.zinc[100]};

  -webkit-mask: var(--mask);
  mask: var(--mask);

  -webkit-mask-composite: source-out;
  mask-composite: subtract;

  animation: ${loadAnimation} 2s infinite linear;
`
