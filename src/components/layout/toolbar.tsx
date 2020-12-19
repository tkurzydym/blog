import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNewspaper, faFolderOpen, faAddressCard, faCircle } from "@fortawesome/free-regular-svg-icons"

import styled from "styled-components"
import MediaQuery from "react-responsive"

const StyledToolbar = styled.div`
  a {
    color: grey;
    &:hover {
      color: black;
    }
    border-width: 0px 0px 0px 0px;
    padding: 0.5em;
  }

  .toolbarIcon {
    font-size: 30px;
  }

  .toolbarTitle {
    padding-left: 0.2em;
  }

  .sepIcon {
    font-size: 5px;
    position: relative;
    bottom: 7px;
  }
`

const ToolbarTitle = styled.span`
  padding-left: 0.2em;
  position: relative;
  bottom: 4px;
`

export const Toolbar: React.FC = () => (
  <StyledToolbar>
    <Link to="/" activeStyle={{ color: "black" }}>
      <FontAwesomeIcon
        className="toolbarIcon"
        title="Recent Posts"
        icon={faNewspaper}
      ></FontAwesomeIcon>
      <MediaQuery minWidth={500}>
        <ToolbarTitle>Recent Posts</ToolbarTitle>
      </MediaQuery>
    </Link>
    <FontAwesomeIcon className="sepIcon" icon={faCircle}></FontAwesomeIcon>

    <Link to="/archive" title="Archive" activeStyle={{ color: "black" }}>
      <FontAwesomeIcon className="toolbarIcon" icon={faFolderOpen}></FontAwesomeIcon>
      <MediaQuery minWidth={500}>
        <ToolbarTitle>Archive</ToolbarTitle>
      </MediaQuery>
    </Link>
    <FontAwesomeIcon className="sepIcon" icon={faCircle}></FontAwesomeIcon>
    <Link to="/about" title="About" activeStyle={{ color: "black" }}>
      <FontAwesomeIcon
        className="toolbarIcon"
        icon={faAddressCard}
      ></FontAwesomeIcon>
      <MediaQuery minWidth={500}>
        <ToolbarTitle>About</ToolbarTitle>
      </MediaQuery>
    </Link>
  </StyledToolbar>
)

export default Toolbar
