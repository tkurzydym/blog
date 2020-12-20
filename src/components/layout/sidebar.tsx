import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuList = styled.ul`
  margin-top: 10%;
`

const StyledLink = styled.div`
  margin: 10%;
  font-size: 25px;
  color: #818181;
  display: block;

  a {
    text-decoration: none;
    color: grey;
    &:hover {
      color: black;
    }
  }
`

export const Sidebar: React.FC = () => (
  <>
    <MenuList>
      <StyledLink>
        <Link to="/" activeStyle={{ color: 'black' }}>
          Recent Posts
        </Link>
        {/** use activeClassName to control icon or aplly some style */}
      </StyledLink>
      {/** Technology Stack!, Link to Talks, External Blogs, ... */}
      <StyledLink>
        <Link to="/archive" activeStyle={{ color: 'black' }}>
          Archive
        </Link>
      </StyledLink>
      <StyledLink>
        <Link to="/about" activeStyle={{ color: 'black' }}>
          About
        </Link>
      </StyledLink>
    </MenuList>
  </>
)

export default Sidebar
