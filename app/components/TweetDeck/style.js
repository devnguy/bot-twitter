import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 5.2rem;
  display: flex;
  padding: 6.2rem 1.5rem 0.5rem 1.5rem;
`

export const TweetInput = styled.div`
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

export const ButtonPanel = styled.div`
  color: ${(props) => props.theme.brand};
  width: 100%;
  display: flex;
  justify-content: space-between;
  i {
    padding: 1.5rem;
    font-size: 2rem;
  }
`

export const TweetInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
