import PropTypes from 'prop-types'

import { StyledHeader, FixedWrapper } from './style'

const Header = ({ title }) => (
  <FixedWrapper>
    <StyledHeader>
      <h2>{title}</h2>
      <h2>
        <i className="material-icons">whatshot</i>
      </h2>
    </StyledHeader>
  </FixedWrapper>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
