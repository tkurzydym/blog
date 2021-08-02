import styled from "styled-components"

const ExternalLinksContainer = styled.div`
  height: 50px;
  padding: 0.5em;
  padding-right: 1em;
  float: right;
`

const StyledExternalLinks = styled.span`
  a {
    text-decoration: none;
    font-size: 1.5em;
    border: 0;
    padding-right: 0.5em;
    color: var(--menuLink);
    &:hover {
      color: #2aa198;
    }
  }

  a:visited {
    &:hover {
      color: var(--menuLinkHover);
    }
  }
`

export { ExternalLinksContainer, StyledExternalLinks }
