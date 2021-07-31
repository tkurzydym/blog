import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StoryEntry from "./StoryEntry"

const StoryOverview = () => {
  const stories = useStaticQuery(graphql`
    query StoriesQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___publishdate, order: DESC},
        filter: {frontmatter: {type: {eq: "story"}}}) {
        edges {
          node {
            id
            frontmatter {
              category
              publishdate(formatString: "MMMM DD, YYYY")
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ul>
      {stories.allMarkdownRemark.edges.map(({ node }) => (
        <StoryEntry key={node.id} node={node}></StoryEntry>
      ))}
    </ul>
  )
}

export default StoryOverview
