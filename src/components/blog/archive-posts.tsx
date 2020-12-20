import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Entry from "./entry"

const ArchivePosts = () => {
  const archive = useStaticQuery(graphql`
    query ArchiveQuery {
      allAsciidoc(sort: { fields: pageAttributes___publishdate, order: DESC }, skip: 5) {
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
        {archive.allAsciidoc.edges.map(({ node }) => (
          <Entry key={node.id} node={node}></Entry>
        ))}
      </ul>
    </>
  )
}

export default ArchivePosts
