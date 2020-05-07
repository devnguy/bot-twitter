import styled, { css } from 'styled-components'

const small = css`
  height: 3rem;
  border-radius: 1.5rem;
`

const large = css`
  font-size: 1.6rem;
  height: 4.9rem;
`

const outline = css`
  background: none;
  color: ${(props) => props.theme.brand};
  :hover {
    background: ${(props) => props.theme.brandlight};
  }
`

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 2.5rem;
  padding: 0 1.5rem;
  text-align: center;
  background: ${(props) => props.theme.brand};
  border: 1px solid ${(props) => props.theme.brand};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.5rem;
  height: 3.9rem;
  transition: 250ms;
  width: 100%;
  :hover {
    background: ${(props) => props.theme.branddark};
  }
  ${(props) => (props.large ? large : null)}
  ${(props) => (props.small ? small : null)}
  ${(props) => (props.outline ? outline : null)}
`

export default StyledButton
