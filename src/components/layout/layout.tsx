import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

import "./layout.css"
import Sidebar from "./Sidebar"
import Toolbar from "./Toolbar"

import MediaQuery from "react-responsive"
import { ToolbarFrame } from "../styles/StyledToolbar"
import { Container, MainContainer, SidebarContainer } from "../styles/StyledContainer"


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
