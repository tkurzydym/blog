import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Prism from "prismjs"
import styled  from "styled-components"

import { graphql } from "gatsby"
import { useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp as chevronUp } from "@fortawesome/free-solid-svg-icons"

const ScrollTopIcon = styled.div`
  float: right;
  padding-bottom: 2rem;
  &:hover {
    cursor: pointer;
  }
`

const PublishDate = styled.div`
  padding-bottom: 0.5rem;
`

function scrollToTop() {
    window.scrollTo({top: 0,left: 0, behavior: 'smooth'})
}

export default function PostTemplate({ data } : any) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    Prism.highlightAll();
  }, [])
  
  return (
    <Layout>
      <SEO title={frontmatter.title} />
        <PublishDate>{frontmatter.publishdate}</PublishDate>

        <div dangerouslySetInnerHTML={{ __html: html }}/>

        <ScrollTopIcon>
          <FontAwesomeIcon size='2x' icon={chevronUp} onClick={scrollToTop}></FontAwesomeIcon>
        </ScrollTopIcon>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        category
        publishdate(formatString: "MMMM DD, YYYY")
        title
        slug
        title
      }
    }
  }
`
