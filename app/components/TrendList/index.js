import TrendListWrapper from './style'
import Trend from './Trend'
import { SectionHeader, ShowMore } from '../SideBarSection'

const TrendList = () => (
  <TrendListWrapper>
    <SectionHeader title="Trends for you" settings />
    <Trend category="Pop" subject="Doja & Nicki" metrics="65.5K Tweets" />
    <Trend category="Alternative" subject="Linkin Park" metrics="14.3K Tweets" />
    <Trend category="Politics" subject="Jared Kushner" metrics="62.6K Tweets" />
    <Trend category="Business & finance" subject="Elon Musk" metrics="77.7K Tweets" />
    <Trend category="Pop" subject="Beyonce" metrics="32.3K Tweets" />
    <ShowMore />
  </TrendListWrapper>
)

export default TrendList
