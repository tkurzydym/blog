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
    background-color: var(--entryHoverBackgroundColor);
  }
`

const StyledStoryEntryFrame = styled.div`
  a {
    color: var(--textNormal);
    &:hover {
      h3 {
        color: var(--entryHoverTitleColor);
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

export const Entry = ({ node }: EntryProps) => {
  const completeLink: string = node.frontmatter.slug
  const link: string = completeLink.replace("stories/", "")

  return (
    <StyledStoryEntryFrame>
      <Link to={link}>
        <StyledEntry>
          <h3 style={{ marginBottom: `0.2em` }}>{node.frontmatter.title}</h3>

          <div style={{ marginBottom: `0.5em` }}>
            <FontAwesomeIcon
              icon={faClock}
              title="published icon"
              style={{ margin: `0.2em 0.5em`, verticalAlign: `middle` }}
            ></FontAwesomeIcon>
            <span>{node.frontmatter.publishdate}</span>

            <FontAwesomeIcon
              icon={faBookmark}
              title="category icon"
              style={{ margin: `0.2em 0.5em`, verticalAlign: `middle` }}
            ></FontAwesomeIcon>
            <span>{node.frontmatter.category}</span>
          </div>
        </StyledEntry>
      </Link>
    </StyledStoryEntryFrame>
  )
}

export default Entry
