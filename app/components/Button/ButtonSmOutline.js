import PropTypes from 'prop-types'
import * as Styled from './style'

export default function ButtonSmOutline({ onClick, children }) {
  return <Styled.ButtonSmOutline onClick={onClick}>{children}</Styled.ButtonSmOutline>
}

ButtonSmOutline.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

ButtonSmOutline.defaultProps = {
  onClick: () => {},
}
