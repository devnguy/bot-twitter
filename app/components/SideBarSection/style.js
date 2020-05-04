import styled from 'styled-components'

export const SectionHeaderWrapper = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  i {
    color: ${(props) => props.theme.brand};
  }
`

export const ShowMoreWrapper = styled.div`
  color: ${(props) => props.theme.brand};
  padding: 1.5rem;
  transition: 250ms;
  border-radius: 0 0 1.5rem 1.5rem;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.lightgray};
  }
`
