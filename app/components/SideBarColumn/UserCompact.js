import styled from 'styled-components'
import PropTypes from 'prop-types'

import UserProfPic from '../UserProfPic'
import { ButtonSmOutline } from '../Button'

const UserCompactContainer = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  transition: 250ms;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.lightgray};
  }
`

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Usernames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`

const Name = styled.div`
  font-weight: 700;
  i {
    padding-left: 0.3rem;
    color: ${(props) => props.theme.brand};
  }
`

const Username = styled.div`
  color: ${(props) => props.theme.gray};
`

const FollowButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const UserCompact = ({ name, verified, username }) => (
  <UserCompactContainer>
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
  </UserCompactContainer>
)

// These need to be changed
UserCompact.propTypes = {
  name: PropTypes.string.isRequired,
  verified: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default UserCompact