import Page from '../components/Page'
import Main from '../components/Main'
import PageHeader from '../components/PageHeader'
import TweetDeck from '../components/TweetDeck'
import Welcome from '../components/Welcome'

const Index = () => (
  <Page>
    <Main>
      <PageHeader title="Home" />
      <TweetDeck />
      <Welcome />
    </Main>
  </Page>
)

export default Index
