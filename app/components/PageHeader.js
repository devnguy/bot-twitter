import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  height: 5.2rem;
  padding: 0 ${(props) => props.theme.timelinePadding};
  background: ${(props) => props.theme.white};
  h2 {
    margin: 1rem 0;
  }
  i {
    color: ${(props) => props.theme.brand};
  }
`

const HeaderContainer = styled.div`
  position: fixed;
  width: ${(props) => props.theme.maxWidthTimeline};
  border-right: 1px solid ${(props) => props.theme.lightgray};
`

const PageHeader = ({ title }) => (
  <HeaderContainer>
    <StyledPageHeader>
      <h2>{title}</h2>
      <h2>
        <i className="material-icons">whatshot</i>
      </h2>
    </StyledPageHeader>
  </HeaderContainer>
)
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
