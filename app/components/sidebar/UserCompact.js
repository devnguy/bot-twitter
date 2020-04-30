import styled from 'styled-components'
import UserProfPic from '../UserProfPic'
import { ButtonSmLight } from '../Button'

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

const UserCompact = (props) => (
  <UserCompactContainer>
    <UserProfPic imgSrc="/images/default.jpg" />
    <UserInfo>
      <Usernames>
        <Name>
          {props.name}
          {props.verified && <i className="fas fa-check-circle"></i>}
        </Name>
        <Username>@{props.username}</Username>
      </Usernames>
      <FollowButton>
        <ButtonSmLight>Follow</ButtonSmLight>
      </FollowButton>
    </UserInfo>
  </UserCompactContainer>
)

export default UserCompact
