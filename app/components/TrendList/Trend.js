import PropTypes from 'prop-types'
import { TrendWrapper, Category, Subject, Metrics } from './style'

const Trend = ({ category, subject, metrics }) => {
  return (
    <TrendWrapper>
      <Category>
        <div>{category} · Trending</div>
        <i className="fas fa-chevron-down" />
      </Category>
      <Subject>{subject}</Subject>
      <Metrics>{metrics}</Metrics>
    </TrendWrapper>
  )
}

// These will need to be changed from string to correct types
Trend.propTypes = {
  category: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  metrics: PropTypes.string.isRequired,
}

export default Trend
