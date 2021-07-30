import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"
import RecentPosts from "../components/blog/recent-posts"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <RecentPosts></RecentPosts>
    </Layout>
  )
}
