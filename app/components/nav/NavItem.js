import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from './Link'

const StyledNavItem = styled.li`
  height: 6rem;
  padding: 0.7rem 0;
`

const HoverableContainer = styled.a`
  padding: 1rem;
  display: flex;
  color: ${(props) => props.theme.black};
  :hover {
    text-decoration: none;
  }
`

const StyledNavIcon = styled.div`
  text-align: center;
  margin: 0 1rem;
  width: 1.9rem;
`

const NavItem = ({ route, iconStyle, icon, pageName }) => (
  <StyledNavItem>
    <Link href={route}>
      <HoverableContainer>
        <StyledNavIcon>
          <i className={`fa${iconStyle} fa-${icon}`} />
        </StyledNavIcon>
        <div>{pageName}</div>
      </HoverableContainer>
    </Link>
  </StyledNavItem>
)

NavItem.propTypes = {
  route: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
}

export default NavItem
