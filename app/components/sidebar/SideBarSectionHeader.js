import styled from 'styled-components'
import PropTypes from 'prop-types'

const SideBarSectionHeaderContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  i {
    color: ${(props) => props.theme.brand};
  }
`

const SideBarSectionHeader = ({ title, settings }) => (
  <SideBarSectionHeaderContainer>
    <h2>{title}</h2>
    {settings && <i className="material-icons-outlined">settings</i>}
  </SideBarSectionHeaderContainer>
)

SideBarSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  settings: PropTypes.bool.isRequired,
}

export default SideBarSectionHeader
