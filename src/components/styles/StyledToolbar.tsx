import styled from "styled-components"

const ToolbarTitle = styled.span`
  padding-left: 0.2em;
  position: relative;
  bottom: 4px;
`

const StyledToolbar = styled.div`
  a {
    text-decoration: none;
    color: var(--menuLink);
    &:hover {
      color: var(--menuLinkHover);
    }
    font-weight: normal;
  }
`

const ToolbarFrame = styled.div`
  width: 100%;
  padding: 0.5em;
  margin: 1em auto;
`

const StyledToolbarLink = styled.span`
  padding: 0.5em;
`

export { ToolbarTitle, StyledToolbar, StyledToolbarLink, ToolbarFrame }
