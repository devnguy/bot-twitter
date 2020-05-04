import styled from 'styled-components'

export const ColumnWrapper = styled.div`
  margin-top: 0.5rem;
  margin-left: 3rem;
`

export const SearchWrapper = styled.div`
  margin-bottom: 1rem;
`

export const FooterWrapper = styled.div``

export const SectionHeaderWrapper = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  i {
    color: ${(props) => props.theme.brand};
  }
`
