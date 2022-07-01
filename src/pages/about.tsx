import React from "react"
import Layout from "../components/layout/layout"
import About from "../components/about/about-component"
import SEO from "../components/layout/seo"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />

      <About></About>
    </Layout>
  )
}
