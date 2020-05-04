import PropTypes from 'prop-types'

import { Wrapper, UserInfo, Usernames, Name, Username, FollowButton } from './style'
import UserProfPic from '../UserProfPic'
import { ButtonSmOutline } from '../Button'

const UserItem = ({ name, verified, username }) => (
  <Wrapper>
    <UserProfPic imgSrc="/images/default.jpg" />
    <UserInfo>
      <Usernames>
        <Name>
          {name}
          {verified && <i className="fas fa-check-circle" />}
        </Name>
        <Username>@{username}</Username>
      </Usernames>
      <FollowButton>
        <ButtonSmOutline>Follow</ButtonSmOutline>
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
