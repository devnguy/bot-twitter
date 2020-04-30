import styled from 'styled-components'
import { ButtonMd } from './Button'

const StyledIntro = styled.div`
  text-align: center;
  padding: 3.9rem 2rem;
  h2 {
    margin: 0 0 1rem 0;
  }
  p {
    color: ${(props) => props.theme.gray};
    margin: 0;
  }
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
`

const Welcome = () => (
  <StyledIntro>
    <h2>Welcome to Twitter!</h2>
    <p>
      This is the best place to see what&apos;s happening in your world. Find some people and topics
      to follow now.
    </p>
    <ButtonContainer>
      <ButtonMd>Let&apos;s go!</ButtonMd>
    </ButtonContainer>
  </StyledIntro>
)

export default Welcome
