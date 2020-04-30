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

const NavLogo = (props) => (
  <StyledNavLogo>
    <i className="fab fa-twitter"></i>
  </StyledNavLogo>
)

export default NavLogo
