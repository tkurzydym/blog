import { Link } from "gatsby"
import React from "react"
import MediaQuery from "react-responsive"
import { StyledBanner } from "./StyledHeader"

export const Banner = ({ siteTitle }) => {
  return (
    <StyledBanner>
      <Link to="/">
        <MediaQuery maxWidth={950}>TK</MediaQuery>
        <MediaQuery minWidth={951}>{siteTitle}</MediaQuery>
      </Link>
    </StyledBanner>
  )
}

export default Banner
