import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../header/Header"

import "./layout.css"
import Toolbar from "../menu/Toolbar"

import { ToolbarFrame } from "../menu/StyledToolbar"
import { Container, MainContainer } from "./StyledContainer"
import StyledImpressum from "../menu/StyledImpressum"

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

      <Container>
        <MainContainer>
            <ToolbarFrame>
              <Toolbar></Toolbar>
            </ToolbarFrame>

          <main>{children}</main>
        </MainContainer>

        <StyledImpressum>
          <Link
            to={"/impressum"}
            activeStyle={{ color: "var(--menuLinkHover)" }}
          >
            Impressum | Legal Notice
          </Link>
        </StyledImpressum>
      </Container>
    </>
  )
}

type LayoutProps = {
  children: any
}

export default Layout
