import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Prism from "prismjs"
import styled  from "styled-components"

import { graphql } from "gatsby"
import { useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareUp as upReg } from "@fortawesome/free-regular-svg-icons"

const ScrollTopIcon = styled.div`
  float: right;
  padding-bottom: 2rem;
  &:hover {
    cursor: pointer;
  }
`

function scrollToTop() {
    window.scrollTo({top: 0,left: 0, behavior: 'smooth'})
}

export default function PostTemplate({ data }) {

  useEffect(() => {
    Prism.highlightAll();
  })
  
  return (
    <Layout>
      <SEO title={data.asciidoc.document.title} />
        <div dangerouslySetInnerHTML={{ __html: data.asciidoc.html }}/>

        <ScrollTopIcon>
          <FontAwesomeIcon size='2x' icon={upReg} onClick={scrollToTop}></FontAwesomeIcon>
        </ScrollTopIcon>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
        subtitle
        main
      }
      pageAttributes {
        category
        publishdate
        title
      }
    }
  }
`
