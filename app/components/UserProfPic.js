import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const UserProfPic = ({ imgSrc }) => (
  <UserProfPicContainer>
    <img src={imgSrc} alt="" />
  </UserProfPicContainer>
)

UserProfPic.propTypes = {
  imgSrc: PropTypes.string,
}

UserProfPic.defaultProps = {
  imgSrc: '/images/default.jpg',
}

export default UserProfPic
