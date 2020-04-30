import styled from 'styled-components'
import SideBarSectionHeader from './SideBarSectionHeader'
import UserCompact from './UserCompact'
import ShowMore from './ShowMore'

const WhoToFollowContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.offWhite};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
`

const WhoToFollow = () => (
  <WhoToFollowContainer>
    <SideBarSectionHeader title="Who to follow" />
    <UserCompact name="Barack Obama" username="BarackObama" verified="true" />
    <UserCompact name="BEYONCE" username="Beyonce" verified="true" />
    <UserCompact name="Taylor Swift" username="taylorswift13" verified="true" />
    <ShowMore />
  </WhoToFollowContainer>
)

export default WhoToFollow
