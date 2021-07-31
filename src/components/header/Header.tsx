import React from "react"

import { StyledHeader } from "./StyledHeader"
import { Banner } from "./Banner"
import { ExternalLinks } from "./ExternalLinks"

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <Banner siteTitle={siteTitle} />
    <ExternalLinks />
  </StyledHeader>
)

export default Header
