import styled from 'styled-components'
import { SectionHeader, ShowMore } from '../SideBarSection'
import UserCompact from './UserCompact'

const WhoToFollowContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.offWhite};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
`

const WhoToFollow = () => (
  <WhoToFollowContainer>
    <SectionHeader title="Who to follow" />
    <UserCompact name="Barack Obama" username="BarackObama" verified="true" />
    <UserCompact name="BEYONCE" username="Beyonce" verified="true" />
    <UserCompact name="Taylor Swift" username="taylorswift13" verified="true" />
    <ShowMore />
  </WhoToFollowContainer>
)

export default WhoToFollow
