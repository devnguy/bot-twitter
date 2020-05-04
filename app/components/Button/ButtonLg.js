import PropTypes from 'prop-types'
import * as Styled from './style'

export default function ButtonLg({ onClick, children }) {
  return <Styled.ButtonLg onClick={onClick}>{children}</Styled.ButtonLg>
}

ButtonLg.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

ButtonLg.defaultProps = {
  onClick: () => {},
}
