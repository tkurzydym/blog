import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />

      <StaticImage
        src="../images/about-profile-picture.jpg"
        alt="Profile Picture"
        placeholder="blurred"
        layout="fixed"
        height={200}
        width={200}
        
      ></StaticImage>
    </Layout>
  )
}
