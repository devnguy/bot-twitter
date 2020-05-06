import PropTypes from 'prop-types'

import Tweet from './Tweet'
import { TweetsWrapper } from './style'

const Tweets = ({ tweets }) => (
  <TweetsWrapper>
    {tweets.map((tweet) => (
      <Tweet tweetData={tweet} />
    ))}
  </TweetsWrapper>
)

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
}

Tweets.defaultProps = {
  tweets: [],
}

export default Tweets
