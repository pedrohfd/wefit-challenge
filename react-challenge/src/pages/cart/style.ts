import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[100]};

  margin: 0 1rem;
  padding: 1rem;

  border-radius: 0.25rem;

  @media (min-width: 768px) {
    margin: 0 12rem;

    padding: 1.5rem;

    margin-bottom: 2rem;
  }
`

export const TitleArea = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 265px 1.03fr 1fr;

    margin-bottom: 1.5rem;
  }
`

export const Title = styled.h1`
  font-size: 0.875rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.zinc[400]};

  text-transform: uppercase;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.zinc[400]};

  margin: 1.3rem 0;
`

export const TotalCartAmountArea = styled.span`
  display: flex;
  flex-direction: column;

  span {
    display: flex;

    width: 100%;

    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;

    span {
      justify-content: flex-end;

      gap: 2rem;
    }
    /* justify-content: space-between; */
  }
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

  @media (min-width: 768px) {
    padding-right: 1rem;
  }
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

  @media (min-width: 768px) {
    width: 14rem;
    height: 2.5rem;

    font-size: 0.75rem;

    margin-top: 0;
  }
`
