import NavItem from './NavItem'
import NavLogo from './NavLogo'
import styled from 'styled-components'
import { ButtonLg } from '../Button'

const StyledNav = styled.ul`
  padding: 0 2rem;
  list-style: none;
  font-size: 1.9rem;
  font-weight: 700;
  width: 275px;
  margin: 0;
`

const Nav = () => (
  <StyledNav>
    <NavLogo />
    <NavItem route="/" pageName="Home" icon="home" iconStyle="s" />
    <NavItem route="/explore" pageName="Explore" icon="hashtag" iconStyle="s" />
    <NavItem route="/notifications" pageName="Notifications" icon="bell" iconStyle="r" />
    <NavItem route="/messages" pageName="Messages" icon="envelope" iconStyle="r" />
    <NavItem route="/bookmarks" pageName="Bookmarks" icon="bookmark" iconStyle="r" />
    <NavItem route="/lists" pageName="Lists" icon="list-alt" iconStyle="r" />
    <NavItem route="/profile" pageName="Profile" icon="user" iconStyle="r" />
    <NavItem route="/more" pageName="More" icon="ellipsis-h" iconStyle="s" />
    <ButtonLg>Tweet</ButtonLg>
  </StyledNav>
)

export default Nav
