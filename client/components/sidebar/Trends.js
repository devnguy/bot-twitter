import styled from 'styled-components'
import SideBarSectionHeader from './SideBarSectionHeader'
import Trend from './Trend'
import ShowMore from './ShowMore'

const TrendsContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.offWhite};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
`

const Trends = (params) => (
  <TrendsContainer>
    <SideBarSectionHeader title="Trends for you" settings="true" />
    <Trend category="Pop" subject={`Doja & Nicki`} metrics="65.5K Tweets" />
    <Trend category="Alternative" subject="Linkin Park" metrics="14.3K Tweets" />
    <Trend category="Politics" subject="Jared Kushner" metrics="62.6K Tweets" />
    <Trend category={`Business & finance`} subject="Elon Musk" metrics="77.7K Tweets" />
    <Trend category="Pop" subject="Beyonce" metrics="32.3K Tweets" />
    <ShowMore />
  </TrendsContainer>
)

export default Trends
