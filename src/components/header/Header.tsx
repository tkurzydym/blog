import React from "react"

import { StyledHeader } from "./StyledHeader"
import { Banner } from "./Banner"
import { ExternalLinks } from "./ExternalLinks"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Banner siteTitle={siteTitle} />
    <ExternalLinks />
  </StyledHeader>
)

export default Header
