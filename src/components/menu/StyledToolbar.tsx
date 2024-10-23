import styled from "styled-components"

const ToolbarTitle = styled.span`
  bottom: 4px;
`

const StyledToolbar = styled.div`
  
  a {
    text-decoration: none;
    font-size: 25px;
    color: var(--menuLink);
    &:hover {
      color: var(--menuLinkHover);
    }
    font-weight: normal;
  }
`

const ToolbarFrame = styled.div`
  width: 100%;
  padding-bottom: 2em;
  margin: 1em auto;
  display: flex;
`

const StyledToolbarLink = styled.span`
  padding: 0.5em;
`

export { ToolbarTitle, StyledToolbar, StyledToolbarLink, ToolbarFrame }
