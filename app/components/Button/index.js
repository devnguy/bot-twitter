import PropTypes from 'prop-types'

import StyledButton from './style'

const Button = (props) => {
  const { href, onClick, children, ...rest } = props
  if (href) {
    return (
      <a href={href}>
        <StyledButton {...rest}>{children}</StyledButton>
      </a>
    )
  }
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  href: undefined,
  onClick: undefined,
}

export default Button
