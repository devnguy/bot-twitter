import styled from 'styled-components'

export const SearchBar = styled.div`
  height: 4.2rem;
  width: 350px;
  display: flex;
  input {
    height: 4rem;
    width: 100%;
    padding: 1rem;
    background: ${(props) => props.theme.lightgray};
    font-size: 1.5rem;
    border: 1px solid ${(props) => props.theme.lightgray};
    border-left: none;
    border-radius: 0 2rem 2rem 0;
    :focus {
      border: 1px solid ${(props) => props.theme.brand};
      border-left: none;
      background: ${(props) => props.theme.white};
    }
  }
`

export const SearchIcon = styled.div`
  color: ${(props) => (props.isFocused ? props.theme.brand : props.theme.gray)};
  background: ${(props) => (props.isFocused ? props.theme.white : props.theme.lightgray)};
  border: 1px solid ${(props) => (props.isFocused ? props.theme.brand : props.theme.lightgray)};
  border-radius: 2rem 0 0 2rem;
  border-right: none;
  height: 4rem;
  padding: 1rem 0.5rem 1rem 1.5rem;
`
