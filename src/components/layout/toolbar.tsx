import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const StyledToolbar = styled.div`
  a {
    color: grey;
    &:hover {
      color: black;
    }
    border-width: 0px 0px 0px 0px;
    padding: 0.5em;
    font-weight: normal;
  }
`

const ToolbarTitle = styled.span`
  padding-left: 0.2em;
  position: relative;
  bottom: 4px;
`

export const Toolbar: React.FC = () => (
  <StyledToolbar>
    <Link to="/" activeStyle={{ color: "black" }}>
      <ToolbarTitle>Recent Posts</ToolbarTitle>
    </Link>

    <Link to="/archive" title="Archive" activeStyle={{ color: "black" }}>
      <ToolbarTitle>Archive</ToolbarTitle>
    </Link>

    <Link to="/about" title="About" activeStyle={{ color: "black" }}>
      <ToolbarTitle>About</ToolbarTitle>
    </Link>
  </StyledToolbar>
)

export default Toolbar
