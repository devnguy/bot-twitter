import styled from 'styled-components'

const Wrapper = styled.main`
  border-right: 1px solid ${(props) => props.theme.lightgray};
  border-left: 1px solid ${(props) => props.theme.lightgray};
  width: ${(props) => props.theme.maxWidthTimeline};
  height: 2000px;
`

export default Wrapper
