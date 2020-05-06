import styled from 'styled-components'

export const TweetsWrapper = styled.div``

export const Wrapper = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  padding-top: 1rem;
`

export const AvatarCol = styled.div``

export const ContentCol = styled.div`
  margin: 0 0.5rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.gray};
`

export const Name = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.black};
  i {
    color: ${(props) => props.theme.brand};
    padding-left: 0.5rem;
  }
`

export const UserName = styled.span`
  padding-left: 0.5rem;
`

/* maybe just add padding */
export const Content = styled.div`
  padding: 0.5rem 0;
`

export const Interface = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.gray};
  i {
    padding-right: 0.5rem;
  }
`

export const InterfaceSection = styled.div``
