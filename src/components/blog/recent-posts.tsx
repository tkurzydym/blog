import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Entry from "./entry"

const RecentPosts = () => {
  const posts = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___publishdate, order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
        limit: 5
      ) {
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
      {posts.allMarkdownRemark.edges.map(({ node }) => (
        <Entry key={node.id} node={node}></Entry>
      ))}
    </ul>
  )
}

export default RecentPosts
