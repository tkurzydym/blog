import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import StoryOverview from "../components/stories/StoryOverview"

export default function StoriesPage() {
  return (
    <Layout>
      <SEO title="Stories" />

      <StoryOverview></StoryOverview>
    </Layout>
  )
}
