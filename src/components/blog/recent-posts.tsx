import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Entry from "./entry"

const RecentPosts = () => {
  const posts = useStaticQuery(graphql`
    query PostsQuery {
      allAsciidoc(sort: { fields: pageAttributes___publishdate, order: DESC}, limit: 5) {
        edges {
          node {
            id
            fields {
              slug
            }
            pageAttributes {
              category
              publishdate
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <ul>
        {posts.allAsciidoc.edges.map(({ node }) => (
          <Entry key={node.id} node={node}></Entry>
        ))}
      </ul>
    </>
  )
}

export default RecentPosts
