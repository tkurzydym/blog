import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../header/Header"

import "./layout.css"
import Sidebar from "../menu/Sidebar"
import Toolbar from "../menu/Toolbar"

import MediaQuery from "react-responsive"
import { ToolbarFrame } from "../menu/StyledToolbar"
import { Container, MainContainer, SidebarContainer } from "./StyledContainer"
import styled from "styled-components"

const StyledImpressum = styled.div`
  bottom: 0;
  position: fixed;
  padding-left: 1em;

  a {
    text-decoration: none;
    color: var(--menuLink);
    &:hover {
      color: var(--menuLinkHover);
    }
  }
`

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Header siteTitle={siteTitle} />

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

      <StyledImpressum>
        <Link to={"/impressum"} activeStyle={{ color: "var(--menuLinkHover)" }}>
          Impressum | Legal Notice
        </Link>
      </StyledImpressum>
    </>
  )
}

type LayoutProps = {
  children: any
}

export default Layout
