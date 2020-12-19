import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Prism from "prismjs"

import { graphql } from "gatsby"
import { useEffect } from "react"


export default function PostTemplate({ data }) {

  useEffect(() => {
    Prism.highlightAll();
  })
  
  return (
    <Layout>
      <SEO title={data.asciidoc.document.title} />
        <div dangerouslySetInnerHTML={{ __html: data.asciidoc.html }}/>
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
