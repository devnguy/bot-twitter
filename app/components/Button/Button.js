import PropTypes from 'prop-types'
import * as Styled from './style'

export default function Button({ onClick, children }) {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
}
