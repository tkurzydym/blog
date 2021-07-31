import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/Header"

import "./layout.css"
import Sidebar from "../menu/Sidebar"
import Toolbar from "../menu/Toolbar"

import MediaQuery from "react-responsive"
import { ToolbarFrame } from "../menu/StyledToolbar"
import { Container, MainContainer, SidebarContainer } from "./StyledContainer"


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
