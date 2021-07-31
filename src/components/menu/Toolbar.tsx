import React from "react"
import { StyledToolbar } from "./StyledToolbar"

import { ToolbarItem } from "./ToolbarItem"
import { toolbarItems } from "./MenuItems"

export const Toolbar = () => (
  <StyledToolbar>
    {toolbarItems.map(item => {
      return <ToolbarItem key={item.link} item={item} />
    })}
  </StyledToolbar>
)

export default Toolbar
