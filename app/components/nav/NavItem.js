import PropTypes from 'prop-types'

import * as Styled from './style'
import Link from './Link'

const NavItem = ({ route, iconStyle, icon, pageName }) => (
  <Styled.NavItem>
    <Link href={route}>
      <Styled.A>
        <Styled.NavIcon>
          <i className={`fa${iconStyle} fa-${icon}`} />
        </Styled.NavIcon>
        <div>{pageName}</div>
      </Styled.A>
    </Link>
  </Styled.NavItem>
)

NavItem.propTypes = {
  route: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
}

export default NavItem
