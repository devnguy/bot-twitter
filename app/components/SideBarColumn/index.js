import { ColumnWrapper, SearchWrapper, FooterWrapper } from './style'
import SearchBar from '../SearchBar'
import TrendList from '../TrendList'
import WhoToFollow from '../WhoToFollow'

const SidebarColumn = () => (
  <ColumnWrapper>
    <SearchWrapper>
      <SearchBar />
    </SearchWrapper>
    <TrendList />
    <WhoToFollow />
    <FooterWrapper />
  </ColumnWrapper>
)

export default SidebarColumn
