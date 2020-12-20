import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faXing } from "@fortawesome/free-brands-svg-icons"
import MediaQuery from 'react-responsive'

const Banner = styled.div`
  max-width: 960px;
  height: 50px;
  padding: 0.5em;
  padding-left: 1em;
  @media only screen and (min-width: 951px) {
    position: fixed;
  }
  float: left;
`

const ExternalLinks = styled.div`
  height: 50px;
  padding: 0.5em;
  padding-right: 1em;
  float: right;
  a {
    border: 0;
    &:hover {
      color: black;
    }
  }
  a:visited {
    color: grey;
    &:hover {
      color: black;
    }
  }
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
          <MediaQuery maxWidth={950}>TK</MediaQuery>
          <MediaQuery minWidth={951}>{siteTitle}</MediaQuery>
          
        </Link>
      </h2>
    </Banner>

    <ExternalLinks>
      <BrandLink
        href="https://github.com/tkurzydym"
        title="tkurzydym github profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon size="lg" icon={faGithub}></FontAwesomeIcon>
      </BrandLink>
      <BrandLink
        href="https://twitter.com/TKurzydym"
        title="tkurzydym twitter profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon size="lg" icon={faTwitter}></FontAwesomeIcon>
      </BrandLink>
      <BrandLink
        href="https://www.xing.com/profile/Tobias_Kurzydym/cv"
        title="tkurzydym xing profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon size="lg" icon={faXing}></FontAwesomeIcon>
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
