import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  transition: 250ms;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.lightgray};
  }
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Usernames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`

export const Name = styled.div`
  font-weight: 700;
  i {
    padding-left: 0.3rem;
    color: ${(props) => props.theme.brand};
  }
`

export const Username = styled.div`
  color: ${(props) => props.theme.gray};
`

export const FollowButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
