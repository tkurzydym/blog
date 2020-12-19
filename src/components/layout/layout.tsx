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
import Footer from "./footer"

import "./layout.css"
import Sidebar from "./sidebar"

import styled from "styled-components"
import MediaQuery from "react-responsive"

const Container = styled.div`
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
  @media only screen and (min-width: 951px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`

const SidebarContainer = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 10%;
  float: left;
  border-style: double;
  border-width: 1px;
  -webkit-border-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0, transparent),
      color-stop(0.5, grey),
      color-stop(1, transparent)
    )
    0 100%;;
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
      
      <MediaQuery minWidth={951}>
        <SidebarContainer>
            <Sidebar></Sidebar>
        </SidebarContainer>
      </MediaQuery>
      <Container>
        <MainContainer>
          <main>{children}</main>
          <Footer />
        </MainContainer>

      </Container>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
