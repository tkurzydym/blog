/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"
import Sidebar from "./sidebar"
import Toolbar from "./toolbar"

import styled from "styled-components"
import MediaQuery from "react-responsive"

const Container = styled.div`
  @media only screen and (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 951px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    width: 80%;
  }
`

const SidebarContainer = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 10%;
  float: left;
  a {
    font-weight: normal;
  }
`

const MainContainer = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 951px) {
    margin-left: 20%;
  }
  padding: 0 1.0875rem 1.45rem;
`

const ToolbarFrame = styled.div`
  width: 100%;
  padding: 0.5em;
  margin: 1em auto;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <SidebarContainer>
        <MediaQuery minWidth={951}>
          <Sidebar />
        </MediaQuery>
      </SidebarContainer>

      <Container>
        <MainContainer>
          <MediaQuery maxWidth={950}>
            <ToolbarFrame>
              <Toolbar></Toolbar>
            </ToolbarFrame>
          </MediaQuery>
          <main>{children}</main>
        </MainContainer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
