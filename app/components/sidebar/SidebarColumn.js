import styled from 'styled-components'
import SearchBar from '../SearchBar'
import Trends from './Trends'
import WhoToFollow from './WhoToFollow'

const SidebarContainer = styled.div`
  margin-top: 0.5rem;
  margin-left: 3rem;
`
const SearchContainer = styled.div`
  margin-bottom: 1rem;
`
const FooterContainer = styled.div``

const SidebarColumn = () => (
  <SidebarContainer>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
    <Trends />
    <WhoToFollow />
    <FooterContainer />
  </SidebarContainer>
)

export default SidebarColumn
