import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Entry from "./entry"

const RecentPosts = () => {
  const posts = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { fields: frontmatter___page_publishdate, order: DESC}, limit: 5) {
        edges {
          node {
            id
            frontmatter {
              page_category
              page_publishdate(formatString: "MMMM DD, YYYY")
              page_title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ul>
      {posts.allMarkdownRemark.edges.map(({ node }) => (
        <Entry key={node.id} node={node}></Entry>
      ))}
    </ul>
  )
}

export default RecentPosts
