import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import ArchivePosts from "../components/blog/archive-posts"

export default function ArchivePage() {
  return (
    <Layout>
      <SEO title="Archive" />
      <ArchivePosts></ArchivePosts>
    </Layout>
  )
}
