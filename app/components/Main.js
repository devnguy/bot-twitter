import styled from 'styled-components'
import PropTypes from 'prop-types'

// import Container from './styles/Container'

const StyledMain = styled.main`
  border-right: 1px solid ${(props) => props.theme.lightgray};
  border-left: 1px solid ${(props) => props.theme.lightgray};
  width: ${(props) => props.theme.maxWidthTimeline};
  height: 2000px;
`

const Main = ({ children }) => (
  <StyledMain>
    {/* <Container>{props.children}</Container> */}
    {children}
  </StyledMain>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
