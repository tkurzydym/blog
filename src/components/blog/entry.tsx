import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faBookmark } from "@fortawesome/free-regular-svg-icons"

const StyledEntry = styled.div`
  margin: 2rem auto;
  border: 1px;
  border-color: rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-radius: 0.5rem;
  padding: 1rem;

  &:hover {
    background-color: #fdf6e3;
  }
`

const StyledEntryFrame = styled.div`
  a {
    color: var(--textNormal);
    &:hover {
      h3 {
        color: #2aa198;
      }
    }
  }

  span {
    font-weight: normal;
  }
`

type EntryProps = {
  node
}

export const Entry = ({ node }: EntryProps) => (
  <StyledEntryFrame>
    <Link to={node.frontmatter.slug}>
      <StyledEntry>
        <h3 style={{ marginBottom: `0.2em` }}>{node.frontmatter.title}</h3>

        <div style={{ marginBottom: `0.5em` }}>
          <FontAwesomeIcon
            icon={faClock}
            title="published icon"
            style={{ margin: `0 0.5em 0.2em 0.5em`, verticalAlign: `middle` }}
          ></FontAwesomeIcon>
          <span>{node.frontmatter.publishdate}</span>

          <FontAwesomeIcon
            icon={faBookmark}
            title="category icon"
            style={{ margin: `0 0.5em 0.2em 0.8em`, verticalAlign: `middle` }}
          ></FontAwesomeIcon>
          <span>{node.frontmatter.category}</span>
        </div>
      </StyledEntry>
    </Link>
  </StyledEntryFrame>
)

export default Entry
