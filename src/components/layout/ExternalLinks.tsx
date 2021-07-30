import { faGithub, faTwitter, faXing } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { ExternalLinksContainer, StyledExternalLinks } from "../styles/StyledExternalLinks"

export const ExternalLinks = () => {
  return (
    <ExternalLinksContainer>
      <StyledExternalLinks>
        <a
          href="https://github.com/tkurzydym"
          title="tkurzydym github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://twitter.com/TKurzydym"
          title="tkurzydym twitter profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.xing.com/profile/Tobias_Kurzydym/cv"
          title="tkurzydym xing profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faXing}></FontAwesomeIcon>
        </a>
      </StyledExternalLinks>
    </ExternalLinksContainer>
  )
}

export default ExternalLinks