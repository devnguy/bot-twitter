import styled from 'styled-components'

const StyledNavLogo = styled.div`
  height: 5.4rem;
  padding: 0 1rem;
  font-size: 2.8rem;
  color: ${(props) => props.theme.brand};
  i {
    padding: 1rem;
  }
`

const NavLogo = () => (
  <StyledNavLogo>
    <i className="fab fa-twitter" />
  </StyledNavLogo>
)

export default NavLogo
