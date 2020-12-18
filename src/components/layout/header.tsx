import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faXing } from "@fortawesome/free-brands-svg-icons"

const Banner = styled.div`
  max-width: 960px;
  height: 50px;
  padding: 0.5em;
  padding-left: 1em;
  position: fixed;
  float: left;
`

const ExternalLinks = styled.div`
  height: 50px;
  padding: 0.5em;
  padding-right: 1em;
  float: right;
`

const BrandLink = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  padding-right: 0.5em;
  color: grey;
  &:hover {
    color: black;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: 50,
      marginBottom: `1.45rem`,
    }}
  >
    <Banner>
      <h2>
        <Link
          to="/"
          style={{
            color: `grey`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </Banner>

    <ExternalLinks>
      <BrandLink
        href="https://github.com/tkurzydym"
        title="tkurzydym github profile"
      >
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </BrandLink>
      <BrandLink
        href="https://twitter.com/TKurzydym"
        title="tkurzydym twitter profile"
      >
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </BrandLink>
      <BrandLink
        href="https://www.xing.com/profile/Tobias_Kurzydym/cv"
        title="tkurzydym xing profile"
      >
        <FontAwesomeIcon icon={faXing}></FontAwesomeIcon>
      </BrandLink>
    </ExternalLinks>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
