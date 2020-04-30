import styled from 'styled-components'
import { ButtonMd } from './Button'
import Separator from './styles/Separator'

const StyledTweetDeck = styled.div`
  padding-top: 5.2rem;
  display: flex;
  padding: 6.2rem 1.5rem 0.5rem 1.5rem;
`

// This should be temporary, replace with UserProfPic
const FakeImg = styled.div`
  height: 49px;
  width: 59px;
  border-radius: 50%;
  margin: 0.5rem 0.5rem 0 0.5rem;
  img {
    height: 49px;
    width: 49px;
    border-radius: 50%;
  }
`

const TweetInput = styled.div`
  div[contenteditable] {
    padding: 1rem;
    width: 100%;
    font-size: 1.9rem;
    font-family: inherit;
    :focus {
      outline: none;
    }
  }
`

const ButtonPanel = styled.div`
  color: ${(props) => props.theme.brand};
  width: 100%;
  display: flex;
  justify-content: space-between;
  i {
    padding: 1.5rem;
    font-size: 2rem;
  }
`

const TweetInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TweetDeck = () => (
  <>
    <StyledTweetDeck>
      <FakeImg>
        <img src="/images/default.jpg" alt="" />
      </FakeImg>
      <TweetInputContainer>
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
          <ButtonMd>Tweet</ButtonMd>
        </ButtonPanel>
      </TweetInputContainer>
    </StyledTweetDeck>
    <Separator />
  </>
)

export default TweetDeck
