import styled from "styled-components"

const MenuList = styled.ul`
  margin-top: 10%;
`

const StyledLink = styled.div`
  margin: 10%;
  font-size: 25px;
  display: block;

  a {
    text-decoration: none;
    color: var(--menuLink);
    &:hover {
      color: var(--menuLinkHover);
    }
  }
`

export { MenuList, StyledLink }
