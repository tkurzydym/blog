import React from "react"

import { MenuList } from "./StyledMenu"
import { SidebarItem } from "./SidebarItem"
import { toolbarItems } from "./MenuItems"

export const Sidebar = () => (
  <MenuList>
    {toolbarItems.map(item => {
      return <SidebarItem key={item.link} item={item} />
    })}
  </MenuList>
)

export default Sidebar
