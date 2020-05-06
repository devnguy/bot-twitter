import Page from '../components/Page'
import Main from '../components/Main'
import Header from '../components/Header'
import TweetDeck from '../components/TweetDeck'
import Welcome from '../components/Welcome'
import Tweets from '../components/Tweets'

// example data
const data = [
  {
    text: 'hello tweeeting what up world',
    user: {
      name: 'Barack Obama',
      screenName: 'barackobama',
      verified: true,
      profileImageUrl: '/images/default.jpg',
    },
    replyCount: '12',
    retweetCount: '36',
    favoritesCount: '50',
  },
  {
    text:
      "hello world 123 123 this is some news this is a longer tweet testing hello the quick brown fox jumps over the lazy dog. I'm angry at the world i'm mad this world is doomed hi mom",
    user: {
      name: 'Taylor Swift',
      screenName: 'taylorswift13',
      verified: true,
      profileImageUrl: '/images/default.jpg',
    },
    replyCount: '24',
    retweetCount: '31',
    favoritesCount: '102',
  },
  {
    text: 'another one dj khalid this is for you rip homie',
    user: {
      name: 'Marshall Mathers',
      screenName: 'eminem',
      verified: false,
      profileImageUrl: '/images/default.jpg',
    },
    replyCount: '98',
    retweetCount: '383',
    favoritesCount: '1.1k',
  },
]

const Index = () => (
  <Page>
    <Main>
      <Header title="Home" />
      <TweetDeck />
      {/* <Welcome /> */}
      <Tweets tweets={data} />
    </Main>
  </Page>
)

export default Index
