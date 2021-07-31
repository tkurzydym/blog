import styled from "styled-components"

const Container = styled.div`
  @media only screen and (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 951px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    width: 80%;
  }
`

const SidebarContainer = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 10%;
  float: left;
  a {
    font-weight: normal;
  }
`

const MainContainer = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 951px) {
    margin-left: 20%;
  }
  padding: 0 1.0875rem 1.45rem;
`

export { SidebarContainer, MainContainer, Container }
