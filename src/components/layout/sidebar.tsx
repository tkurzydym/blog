import React from "react"

import { MenuList, StyledLink } from "../styles/StyledMenu"
import { SidebarItem } from "./SidebarItem"

const toolbarItems = [
  { link: "/", name: "Recent Posts" },
  { link: "/archive", name: "Archive" },
  { link: "/about", name: "About" },
]

export const Sidebar = () => (
  <MenuList>
    {toolbarItems.map(item => {
      return (
        <SidebarItem item={item} />
      )
    })}
  </MenuList>
)

export default Sidebar
