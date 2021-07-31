import React from "react"
import { StyledToolbar } from "./StyledToolbar"

import { ToolbarItem } from "./ToolbarItem"

const toolbarItems = [
  { link: "/", name: "Recent Posts" },
  { link: "/archive", name: "Archive" },
  { link: "/about", name: "About" },
]

export const Toolbar = () => (
  <StyledToolbar>
    {toolbarItems.map(item => {
      return <ToolbarItem key={item.link} item={item} />
    })}
  </StyledToolbar>
)

export default Toolbar
