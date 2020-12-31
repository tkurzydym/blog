import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Entry from "./entry"

const ArchivePosts = () => {
  const archive = useStaticQuery(graphql`
    query ArchiveQuery {
      allAsciidoc(
        sort: { fields: pageAttributes___publishdate, order: DESC }
        skip: 5
      ) {
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
        {archive.allAsciidoc.edges.length == 0 && <p>No blog posts have been archived until now. Go back to the <Link to="/">Recent Posts</Link> Page.  </p>}
      </ul>
    </>
  )
}

export default ArchivePosts
