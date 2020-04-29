import styled from 'styled-components'

const ShowMoreContainer = styled.div`
  color: ${(props) => props.theme.brand};
  padding: 1.5rem;
  transition: 250ms;
  border-radius: 0 0 1.5rem 1.5rem;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.lightgray};
  }
`

const ShowMore = (props) => <ShowMoreContainer>Show more</ShowMoreContainer>

export default ShowMore
