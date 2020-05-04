import styled from 'styled-components'

export const Nav = styled.ul`
  padding: 0 2rem;
  list-style: none;
  font-size: 1.9rem;
  font-weight: 700;
  width: 275px;
  margin: 0;
`

export const NavItem = styled.li`
  height: 6rem;
  padding: 0.7rem 0;
`

export const A = styled.a`
  padding: 1rem;
  display: flex;
  color: ${(props) => props.theme.black};
  border-radius: 2.5rem;
  transition: 250ms;
  :hover {
    text-decoration: none;
    background: ${(props) => props.theme.brandlighter};
  }
`

export const NavIcon = styled.div`
  text-align: center;
  margin: 0 1rem;
  width: 1.9rem;
`

export const NavLogo = styled.div`
  height: 5.4rem;
  padding: 0 1rem;
  font-size: 2.8rem;
  color: ${(props) => props.theme.brand};
  i {
    padding: 1rem;
  }
`
