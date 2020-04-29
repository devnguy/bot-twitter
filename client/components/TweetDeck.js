import styled from 'styled-components'
import { ButtonMd } from '../components/Button'
import Separator from '../components/styles/Separator'

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

const TweetDeck = (params) => (
  <>
    <StyledTweetDeck>
      <FakeImg>
        <img src="/images/default.jpg"></img>
      </FakeImg>
      <TweetInputContainer>
        <TweetInput>
          <div contentEditable>What's happening?</div>
        </TweetInput>
        <ButtonPanel>
          <div>
            <i className="far fa-image"></i>
            <i className="far fa-file-video"></i>
            <i className="far fa-chart-bar"></i>
            <i className="far fa-smile"></i>
          </div>
          <ButtonMd>Tweet</ButtonMd>
        </ButtonPanel>
      </TweetInputContainer>
    </StyledTweetDeck>
    <Separator />
  </>
)

export default TweetDeck
