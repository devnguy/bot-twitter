import PropTypes from 'prop-types'

import { SectionHeaderWrapper } from './style'

const SectionHeader = ({ title, settings }) => (
  <SectionHeaderWrapper>
    <h2>{title}</h2>
    {settings && <i className="material-icons-outlined">settings</i>}
  </SectionHeaderWrapper>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  settings: PropTypes.bool,
}

SectionHeader.defaultProps = {
  settings: false,
}

export default SectionHeader
