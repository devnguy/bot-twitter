import PropTypes from 'prop-types'

import { Wrapper, UserInfo, Usernames, Name, Username, FollowButton } from './style'
import UserAvatar from '../UserAvatar'
import Button from '../Button'

const UserItem = ({ name, verified, username }) => (
  <Wrapper>
    <UserAvatar imgSrc="/images/default.jpg" />
    <UserInfo>
      <Usernames>
        <Name>
          {name}
          {verified && <i className="fas fa-check-circle" />}
        </Name>
        <Username>@{username}</Username>
      </Usernames>
      <FollowButton>
        <Button small outline>
          Follow
        </Button>
      </FollowButton>
    </UserInfo>
  </Wrapper>
)

// These need to be changed
UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  verified: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default UserItem
