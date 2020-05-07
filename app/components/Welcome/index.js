import Button from '../Button'
import { Wrapper, ButtonWrapper } from './style'

const Welcome = () => (
  <Wrapper>
    <h2>Welcome to Twitter!</h2>
    <p>
      This is the best place to see what's happening in your world. Find some people and topics to
      follow now.
    </p>
    <ButtonWrapper>
      <Button>Let's go!</Button>
    </ButtonWrapper>
  </Wrapper>
)

export default Welcome
