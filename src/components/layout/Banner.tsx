import { Link } from "gatsby"
import React from "react"
import MediaQuery from "react-responsive"
import { StyledBanner } from "../styles/StyledHeader"

export const Banner = ({siteTitle}) => {
  return (
    <StyledBanner>
      <h2>
        <Link
          to="/"
          style={{
            color: `grey`,
            textDecoration: `none`,
          }}
        >
          <MediaQuery maxWidth={950}>TK</MediaQuery>
          <MediaQuery minWidth={951}>{siteTitle}</MediaQuery>
        </Link>
      </h2>
    </StyledBanner>
  )
}

export default Banner