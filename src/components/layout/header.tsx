import React from "react"

import { StyledHeader } from "../styles/StyledHeader"
import { Banner } from "./Banner"
import { ExternalLinks } from "./ExternalLinks"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: 50,
      marginBottom: `1.45rem`,
    }}
  >
    <Banner siteTitle={siteTitle} />
    <ExternalLinks />
  </header>
)

export default Header
