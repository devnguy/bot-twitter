import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  padding: 3.9rem 2rem;
  h2 {
    margin: 0 0 1rem 0;
  }
  p {
    color: ${(props) => props.theme.gray};
    margin: 0;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
`
