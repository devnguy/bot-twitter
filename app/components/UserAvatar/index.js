import PropTypes from 'prop-types'

import Wrapper from './style'

const UserAvatar = ({ imgSrc }) => (
  <Wrapper>
    <img src={imgSrc} alt="" />
  </Wrapper>
)

UserAvatar.propTypes = {
  imgSrc: PropTypes.string,
}

UserAvatar.defaultProps = {
  imgSrc: '/images/default.jpg',
}

export default UserAvatar
