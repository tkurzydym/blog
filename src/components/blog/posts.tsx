import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Entry from "./entry"

const Posts = () => {
  const posts = useStaticQuery(graphql`
    query PostsQuery {
      allAsciidoc(sort: { fields: pageAttributes___publishdate, order: DESC }) {
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

export default Posts
