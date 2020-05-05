import PropTypes from 'prop-types'

import Wrapper from './style'
// import Container from './styles/Container'

const Main = ({ children }) => (
  <Wrapper>
    {/* <Container>{props.children}</Container> */}
    {children}
  </Wrapper>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
