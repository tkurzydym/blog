import styled from "styled-components"

const StyledImpressum = styled.div`
  @media only screen and (min-width: 951px) {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-left: 1em;
  }

  @media only screen and (max-width: 950px) {
  }

  a {
    text-decoration: none;
    color: var(--menuLink);
    &:hover {
      color: var(--menuLinkHover);
    }
  }
`

export default StyledImpressum
