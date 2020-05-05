import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  height: 5.2rem;
  padding: 0 ${(props) => props.theme.timelinePadding};
  background: ${(props) => props.theme.white};
  h2 {
    margin: 1rem 0;
  }
  i {
    color: ${(props) => props.theme.brand};
  }
`

export const FixedWrapper = styled.div`
  position: fixed;
  width: ${(props) => props.theme.maxWidthTimeline};
  border-right: 1px solid ${(props) => props.theme.lightgray};
`
