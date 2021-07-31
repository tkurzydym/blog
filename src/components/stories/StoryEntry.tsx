import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBookmark } from '@fortawesome/free-regular-svg-icons'


const StyledEntry = styled.div`
  margin: 3rem auto;
`

type EntryProps = {
  node
}

export const Entry = ({ node }: EntryProps) => {

  const completeLink: string = node.frontmatter.slug;
  const link: string = completeLink.replace("stories/", '');

  return (
    <StyledEntry>
    <h3 style={{marginBottom:`0.2em`}}>{node.frontmatter.title}</h3>
    
    <div style={{marginBottom:`0.5em`}}>
      <FontAwesomeIcon icon={faClock} title="published icon" style={{margin:`0.2em 0.5em`, verticalAlign: `middle`}}></FontAwesomeIcon>
      {node.frontmatter.publishdate}

      <FontAwesomeIcon icon={faBookmark} title="category icon" style={{margin:`0.2em 0.5em`, verticalAlign: `middle`}}></FontAwesomeIcon>
      {node.frontmatter.category}
    </div>

    <Link to={link}>Read Story</Link>
  </StyledEntry>
  )
}

export default Entry
