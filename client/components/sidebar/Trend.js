import styled from 'styled-components'

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

const Trend = (props) => {
  return (
    <TrendContainer>
      <Category>
        <div>{props.category} · Trending</div>
        <i className="fas fa-chevron-down"></i>
      </Category>
      <Subject>{props.subject}</Subject>
      <Metrics>{props.metrics}</Metrics>
    </TrendContainer>
  )
}

export default Trend
