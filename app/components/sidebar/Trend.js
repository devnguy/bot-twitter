import styled from 'styled-components'
import PropTypes from 'prop-types'

const TrendContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-bottom: solid 1px ${(props) => props.theme.lightgray};
  color: ${(props) => props.theme.gray};
  transition: 250ms;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.lightgray};
  }
`
const Category = styled.div`
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
`
const Subject = styled.div`
  color: ${(props) => props.theme.black};
  font-weight: 700;
  padding-top: 0.3rem;
`
const Metrics = styled.div`
  padding-top: 0.3rem;
`

const Trend = ({ category, subject, metrics }) => {
  return (
    <TrendContainer>
      <Category>
        <div>{category}· Trending</div>
        <i className="fas fa-chevron-down" />
      </Category>
      <Subject>{subject}</Subject>
      <Metrics>{metrics}</Metrics>
    </TrendContainer>
  )
}

// These will need to be changed from string to correct types
Trend.propTypes = {
  category: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  metrics: PropTypes.string.isRequired,
}

export default Trend
