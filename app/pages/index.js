import Page from '../components/Page'
import Main from '../components/Main'
import Header from '../components/Header'
import TweetDeck from '../components/TweetDeck'
import Welcome from '../components/Welcome'

const Index = () => (
  <Page>
    <Main>
      <Header title="Home" />
      <TweetDeck />
      <Welcome />
    </Main>
  </Page>
)

export default Index
