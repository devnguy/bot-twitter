import PropTypes from 'prop-types'

import UserAvatar from '../UserAvatar'
import Interpunct from '../Typography'
import {
  Wrapper,
  AvatarCol,
  ContentCol,
  UserInfo,
  Name,
  UserName,
  Content,
  Interface,
  InterfaceSection,
} from './style'

const Tweet = ({ tweetData }) => (
  <Wrapper>
    <AvatarCol>
      <UserAvatar />
    </AvatarCol>
    <ContentCol>
      <UserInfo>
        <div>
          <Name>
            {tweetData.user.name}
            {tweetData.user.verified && <i className="fas fa-check-circle" />}
          </Name>
          <UserName>@{tweetData.user.screenName}</UserName>
          <Interpunct />
          15h
        </div>
        <div>
          <i className="fas fa-chevron-down" />
        </div>
      </UserInfo>
      <Content>{tweetData.text}</Content>
      <Interface>
        <InterfaceSection>
          <i className="far fa-comment" />
          {tweetData.replyCount}
        </InterfaceSection>
        <InterfaceSection>
          <i className="fas fa-retweet" />
          {tweetData.retweetCount}
        </InterfaceSection>
        <InterfaceSection>
          <i className="far fa-heart" />
          {tweetData.favoritesCount}
        </InterfaceSection>
        <InterfaceSection>
          <i className="far fa-share-square" />
        </InterfaceSection>
      </Interface>
    </ContentCol>
  </Wrapper>
)

Tweet.propTypes = {
  tweetData: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.object,
    replyCount: PropTypes.string,
    retweetCount: PropTypes.string,
    favoritesCount: PropTypes.string,
  }).isRequired,
}

export default Tweet
