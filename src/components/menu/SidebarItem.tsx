import { Link } from "gatsby"
import React from "react"
import { StyledLink } from "./StyledMenu"

export const SidebarItem = ({ item }) => {
  return (
    <StyledLink>
      <Link to={item.link} activeStyle={{ color: "var(--menuLinkActive)" }}>
        {item.name}
      </Link>
    </StyledLink>
  )
}

export default SidebarItem
