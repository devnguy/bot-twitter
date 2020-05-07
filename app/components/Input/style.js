import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 1rem 0;
  background: ${(props) => props.theme.offWhite};
  /* border-bottom: 2px solid  */
  border-bottom: 2px solid ${(props) => (props.isFocused ? props.theme.brand : props.theme.gray)};
  border-radius: 0.2rem;
`

export const StyledInput = styled.input`
  background: ${(props) => props.theme.offWhite};
  width: 100%;
  border: none;
  font-size: 2rem;
  padding: 0.2rem 1rem 0.5rem 1rem;
`

export const FieldName = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 0 1rem;
  background: ${(props) => props.theme.offWhite};
  color: ${(props) => (props.isFocused ? props.theme.brand : props.theme.gray)};
`
