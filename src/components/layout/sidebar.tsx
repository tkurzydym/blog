import React from "react"
import { Link } from "gatsby"
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

export const Sidebar: React.FC = () => (
  <>
    <MenuList>
      <StyledLink>
        <Link to="/" activeStyle={{ color: "var(--menuLinkHover)" }}>
          Recent Posts
        </Link>
        {/** use activeClassName to control icon or aplly some style */}
      </StyledLink>
      {/** Technology Stack!, Link to Talks, External Blogs, ... */}
      <StyledLink>
        <Link to="/archive" activeStyle={{ color: "var(--menuLinkHover)" }}>
          Archive
        </Link>
      </StyledLink>
      <StyledLink>
        <Link to="/about" activeStyle={{ color: "var(--menuLinkHover)" }}>
          About
        </Link>
      </StyledLink>
    </MenuList>
  </>
)

export default Sidebar
