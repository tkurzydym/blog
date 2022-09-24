import styled from "styled-components"

const StyledHeader = styled.header`
  height: 50px;
  margin-bottom: 1.45rem;
`

const StyledBanner = styled.h2`
  max-width: 960px;
  height: 50;
  padding: 0.5em;
  padding-left: 1em;

  @media only screen and (min-width: 951px) {
    position: fixed;
  }

  float: left;

  a {
    &:hover {
      color: var(--bannerHoverColor);
    }
    color: var(--menuLink);
    text-decoration: none;
    border-width: 0px;
  }
`

export { StyledHeader, StyledBanner }
