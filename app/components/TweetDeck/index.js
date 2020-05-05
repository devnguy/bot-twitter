import { Button } from '../Button'
import UserAvatar from '../UserAvatar'
import Separator from '../styles/Separator'
import { Wrapper, TweetInput, ButtonPanel, TweetInputWrapper } from './style'

const TweetDeck = () => (
  <>
    <Wrapper>
      <UserAvatar>
        <img src="/images/default.jpg" alt="" />
      </UserAvatar>
      <TweetInputWrapper>
        <TweetInput>
          <div contentEditable>What&apos;s happening?</div>
        </TweetInput>
        <ButtonPanel>
          <div>
            <i className="far fa-image" />
            <i className="far fa-file-video" />
            <i className="far fa-chart-bar" />
            <i className="far fa-smile" />
          </div>
          <Button>Tweet</Button>
        </ButtonPanel>
      </TweetInputWrapper>
    </Wrapper>
    <Separator />
  </>
)

export default TweetDeck
