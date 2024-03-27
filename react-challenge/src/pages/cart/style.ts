import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[100]};

  margin: 0 1rem;
  padding: 1rem;

  border-radius: 0.25rem;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.zinc[400]};

  margin: 1.3rem 0;
`

export const TotalCartAmountArea = styled.span`
  display: flex;

  align-items: center;
  justify-content: space-between;
`

export const TotalCartAmountTitle = styled.p`
  text-transform: uppercase;

  font-size: 0.875rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.zinc[400]};
`

export const TotalCartAmountValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.slate[500]};
`

export const CheckoutButton = styled.button`
  color: ${({ theme }) => theme.colors.zinc[100]};

  background-color: ${({ theme }) => theme.colors.blue[500]};

  font-size: 0.875rem;
  font-weight: 700;

  border: none;
  border-radius: 0.25rem;

  width: 100%;
  height: 2.5rem;

  margin-top: 1rem;

  text-transform: uppercase;
`
