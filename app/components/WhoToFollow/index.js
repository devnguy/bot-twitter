import Wrapper from './style'
import { SectionHeader, ShowMore } from '../SideBarSection'
import UserItem from '../UserItem'

// TODO: Get users as a prop, map, and render UserItems
const WhoToFollow = () => (
  <Wrapper>
    <SectionHeader title="Who to follow" />
    <UserItem name="Barack Obama" username="BarackObama" verified="true" />
    <UserItem name="BEYONCE" username="Beyonce" verified="true" />
    <UserItem name="Taylor Swift" username="taylorswift13" verified="true" />
    <ShowMore />
  </Wrapper>
)

export default WhoToFollow
