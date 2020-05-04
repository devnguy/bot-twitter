import styled from 'styled-components'

export const TrendListWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.offWhite};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
`

export const TrendWrapper = styled.div`
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
export const Category = styled.div`
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
`
export const Subject = styled.div`
  color: ${(props) => props.theme.black};
  font-weight: 700;
  padding-top: 0.3rem;
`
export const Metrics = styled.div`
  padding-top: 0.3rem;
`
