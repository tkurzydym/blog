import React from "react"

import { Link } from "gatsby"
import { StyledToolbarLink, ToolbarTitle } from "../styles/StyledToolbar"

export const ToolbarItem = ({ item }) => (
  <StyledToolbarLink>
    <Link
      to={item.link}
      activeStyle={{ color: "var(--menuLinkHover)" }}
      title={item.name}
    >
      <ToolbarTitle>{item.name}</ToolbarTitle>
    </Link>
  </StyledToolbarLink>
)

export default ToolbarItem
