import styled from 'styled-components'

const UserProfPicContainer = styled.div`
  height: 49px;
  width: 49px;
  margin-right: 0.5rem;
  img {
    height: 49px;
    width: 49px;
    border-radius: 50%;
  }
`

const UserProfPic = (props) => (
  <UserProfPicContainer>
    <img src={props.imgSrc} />
  </UserProfPicContainer>
)

export default UserProfPic
