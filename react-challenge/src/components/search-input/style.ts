import styled from 'styled-components'

export const SearchInputRoot = styled.div`
  background: ${({ theme }) => theme.colors.zinc[100]};

  display: flex;

  align-items: center;
  justify-content: space-between;

  border: 2px solid transparent;

  border-radius: 0.5rem;

  padding-right: 1rem;

  width: 100%;

  transition: border 0.2s;

  button {
    color: ${({ theme }) => theme.colors.zinc[300]};
  }

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.blue[500]};
    button {
      color: ${({ theme }) => theme.colors.slate[500]};
    }
  }
`

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.zinc[100]};

  width: 100%;

  border: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.slate[500]};

  font-size: 1rem;
  font-weight: 400;

  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.zinc[300]};
  }

  outline: none;
`

export const Button = styled.button`
  background: transparent;

  border: none;

  cursor: pointer;

  transition: color 0.2s;
`
