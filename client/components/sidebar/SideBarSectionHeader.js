import styled from 'styled-components'

const SideBarSectionHeaderContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
  i {
    color: ${(props) => props.theme.brand};
  }
`

const SideBarSectionHeader = (props) => (
  <SideBarSectionHeaderContainer>
    <h2>{props.title}</h2>
    {props.settings && <i className="material-icons-outlined">settings</i>}
  </SideBarSectionHeaderContainer>
)

export default SideBarSectionHeader
