import styled from 'styled-components'

// Base button
export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 2.5rem;
  padding: 0 1.5rem;
  text-align: center;
  background: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.5rem;
  height: 3.9rem;
  transition: 250ms;
  :hover {
    background: ${(props) => props.theme.branddark};
  }
`

export const ButtonLg = styled(Button)`
  font-size: 1.6rem;
  height: 4.9rem;
  width: 210px;
`

export const ButtonSmOutline = styled(Button)`
  border: 1px solid ${(props) => props.theme.brand};
  border-radius: 1.5rem;
  background: none;
  color: ${(props) => props.theme.brand};
  height: 3rem;
  :hover {
    background: ${(props) => props.theme.brandlight};
  }
`
