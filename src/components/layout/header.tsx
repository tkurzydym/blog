import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faXing } from "@fortawesome/free-brands-svg-icons"
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

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

const TopRightToolbar = styled.div`
  height: 50px;
  padding: 0.5em;
  padding-right: 1em;
  float: right;
`

const ExternalLinks = styled.span`
  a {
    text-decoration: none;
    font-size: 1.5em;
    border: 0;
    padding-right: 0.5em;
    color: var(--menuLink);
    &:hover {
      color: var(--menuLinkHover);
    }
  }

  a:visited {
    &:hover {
      color: var(--menuLinkHover);
    }
  }
`

const DarkModeToggler = styled.span`
  padding-right: 0.5em;
  color: var(--menuLink);
  font-size: 1.5em;

  .lightbulb {
    &:hover {
      color: yellow;
    }
  }
  .moon {
    &:hover {
      color: black;
    }
  }
`

const IconCheckboxContainer = styled.label`
  cursor: pointer;
`

const IconCheckbox = styled.input`
  opacity: 0;
  cursor: pointer;
  height: 0;
  weight: 0;
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
    <TopRightToolbar>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <IconCheckboxContainer>
            {theme === "dark" && (
              <DarkModeToggler>
                <FontAwesomeIcon
                  className="lightbulb"
                  size="lg"
                  icon={faLightbulb}
                ></FontAwesomeIcon>
              </DarkModeToggler>
            )}
            {theme === "light" && (
              <DarkModeToggler>
                <FontAwesomeIcon
                  className="moon"
                  size="lg"
                  icon={faMoon}
                ></FontAwesomeIcon>
              </DarkModeToggler>
            )}
            <IconCheckbox
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
          </IconCheckboxContainer>
        )}
      </ThemeToggler>
      <ExternalLinks>
        <a
          href="https://github.com/tkurzydym"
          title="tkurzydym github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://twitter.com/TKurzydym"
          title="tkurzydym twitter profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.xing.com/profile/Tobias_Kurzydym/cv"
          title="tkurzydym xing profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faXing}></FontAwesomeIcon>
        </a>
      </ExternalLinks>
    </TopRightToolbar>
  </header>
)

export default Header
