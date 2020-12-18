import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Posts from "../components/blog/posts"

export default function IndexPage() {
  return (
    <>
    <Layout>
      <SEO title="Home" />
      <Posts></Posts>
    </Layout>
    </>
  )
}
