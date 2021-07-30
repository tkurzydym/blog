import { Link } from "gatsby"
import React from "react"
import { StyledLink } from "../styles/StyledMenu"

export const SidebarItem = ({item}) => {
  return (
    <StyledLink>
      <Link to={item.link} activeStyle={{ color: "var(--menuLinkHover)" }}>
        {item.name}
      </Link>
    </StyledLink>
  )
}

export default SidebarItem