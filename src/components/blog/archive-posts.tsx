import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Entry from "./entry"

const ArchivePosts = () => {
  const archive = useStaticQuery(graphql`
    query ArchiveQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___publishdate, order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
        skip: 5
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
      {archive.allMarkdownRemark.edges.map(({ node }) => (
        <Entry key={node.id} node={node}></Entry>
      ))}
      {archive.allMarkdownRemark.edges.length == 0 && (
        <p>
          No blog posts have been archived until now. Go back to the{" "}
          <Link to="/">Recent Posts</Link> Page.{" "}
        </p>
      )}
    </ul>
  )
}

export default ArchivePosts
