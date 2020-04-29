import styled from 'styled-components'
import Container from './styles/Container'

const StyledMain = styled.main`
  border-right: 1px solid ${(props) => props.theme.lightgray};
  border-left: 1px solid ${(props) => props.theme.lightgray};
  width: ${(props) => props.theme.maxWidthTimeline};
  height: 2000px;
`

const Main = (props) => (
  <StyledMain>
    {/* <Container>{props.children}</Container> */}
    {props.children}
  </StyledMain>
)

export default Main
