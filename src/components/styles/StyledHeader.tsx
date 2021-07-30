import styled from "styled-components"

const StyledHeader = styled.header`
  height: 50;
  margin-bottom: 1.45rem;
`

const StyledBanner = styled.div`
  max-width: 960px;
  height: 50px;
  padding: 0.5em;
  padding-left: 1em;
  @media only screen and (min-width: 951px) {
    position: fixed;
  }
  float: left;
`


export { StyledHeader, StyledBanner }
