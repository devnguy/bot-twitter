import styled from 'styled-components'

export const ButtonLg = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 2.5rem;
  text-align: center;
  background: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.6rem;
  height: 4.9rem;
  width: 210px;
  transition-duration: 250ms;
  :hover {
    background: ${(props) => props.theme.branddark};
  }
`

export const ButtonMd = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 2.5rem;
  text-align: center;
  padding: 0 1.5rem;
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

export const ButtonSmLight = styled.button`
  border: 1px solid ${(props) => props.theme.brand};
  cursor: pointer;
  outline: none;
  border-radius: 1.5rem;
  text-align: center;
  padding: 0 1.5rem;
  background: none;
  color: ${(props) => props.theme.brand};
  font-weight: 700;
  font-size: 1.5rem;
  height: 3rem;
  transition: 250ms;
  :hover {
    background: ${(props) => props.theme.brandlight};
  }
`
