import Link from './Link'
import styled from 'styled-components'

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

const NavItem = (props) => (
  <StyledNavItem>
    <Link href={props.route}>
      <HoverableContainer>
        <StyledNavIcon>
          <i className={`fa${props.iconStyle} fa-${props.icon}`}></i>
        </StyledNavIcon>
        <div>{props.pageName}</div>
      </HoverableContainer>
    </Link>
  </StyledNavItem>
)

export default NavItem
