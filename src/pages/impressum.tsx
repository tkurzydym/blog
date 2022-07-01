import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Impressum from "../components/impressum/impressum-component"

export default function ImpressumPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Impressum></Impressum>
    </Layout>
  )
}
