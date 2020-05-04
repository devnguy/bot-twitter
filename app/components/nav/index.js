import * as Styled from './style'
import NavItem from './NavItem'
import NavLogo from './NavLogo'
import { ButtonLg } from '../Button'

const Nav = () => (
  <Styled.Nav>
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
  </Styled.Nav>
)

export default Nav
