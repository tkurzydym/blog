import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";

const StyledCV = styled.div`
    display: flex;
`

const StyledWork = styled.div`
    padding: 1rem;
`

const StyledTalks = styled.div`
    padding: 1rem;
`

const StyledJobDesc = styled.div`
    padding: 1rem;
    flex: 75%;
`
const StyledPeriod = styled.div`
    padding: 1rem;
    flex: 25%;
`

const StyledTalkEntry = styled.div`
    border-left: 5px solid var(--violet);
    border-radius: 10px;
    padding-left: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`

const Work = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 50, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

    const experiences = [
        {
            title: 'Software Developer',
            company: 'OPEN KNOWLEDGE GmbH',
            period: '09/2020 – present',
            duration: 'Four years ongoing',
        },
        {
            title: 'Software Engineer',
            company: 'CREALOGIX Advisory GmbH & Co. KG',
            period: '07/2018 – 08/2020',
            duration: 'Two years',
        },
        {
            title: 'Fachinformatiker für Anwendungsentwicklung',
            company: 'ELAXY Financial Software & Solution GmbH & Co. KG',
            period: '08/2015 - 06/2018',
            duration: 'Three years',
        },
    ];

    const talksAndWorkshops = [
        {
            subject: 'Nie wieder Log-Files! Verteilte Systeme mit modernen Tools angenehmer beobachten.',
            conference: 'OOP 2025',
            location: 'ICM München',
            date: '03.02.2025 – 07.02.2025',
            logo: 'logo-oop-muenchen.png',
        },
        {
            subject: 'Effektives API Management: Zentrale Steuerung und Optimierung Eurer APIs',
            conference: 'MAD Summit 2024 - Winter',
            location: 'Maritim proArte Hotel - Berlin',
            date: '25.11.2024 - 27.11.2024',
            logo: 'mad-summit.png',
        },
        {
            subject: 'Schritt für Schritt in die Cloud',
            conference: 'Software Architecture Alliance',
            location: 'NH München Ost Conference Center',
            date: '21.10.2024 - 23.10.2024',
            logo: 'saa_small.png',
        },
        {
            subject: 'API- und Service Management',
            conference: 'MAD Summit 2024 - Sommer',
            location: 'Holiday Inn München Unterhaching',
            date: '10.06.2024 - 12.06.2024',
            logo: 'mad-summit.png',
        },
        {
            subject: 'API- und Service Management',
            conference: 'Microservices und Web-API – moderne und sichere Softwarearchitektur: Die Webinar-Serie von Heise',
            location: 'Online',
            date: '14.09.2023 - 12.10.2023',
            logo: 'heise-academy.png',
        },
        {
            subject: 'Nie wieder Log Files!',
            conference: 'Java Forum Nord 2023',
            location: 'Hannover Congress Centrum',
            date: '12.09.2023',
            logo: 'javaforumnord.png',
        },
        {
            subject: 'MLOps mit Python',
            conference: 'data2day 2022',
            location: 'IHK Karlsruhe',
            date: '19. - 21 September 2022',
            logo: 'd2d.png',
        },
    ];


    return (
        <>
            <StyledWork>
                <h1>Work Experiences</h1>
                {experiences.map((experience, index) => (
                    <StyledCV>
                        <StyledPeriod key={index}>
                            <strong>{experience.period}</strong><br></br>
                            {experience.duration}
                        </StyledPeriod>
                        <StyledJobDesc key={index}>
                            <strong>
                                {experience.title},</strong><br/>
                                {experience.company}
                        </StyledJobDesc>
                    </StyledCV>
                ))}
            </StyledWork>
            <StyledTalks>
                <h1>Talks & Workshops</h1>
                {talksAndWorkshops.map((talk, index) => {
                    const imageData = data.allFile.edges.find(
                        edge => edge.node.relativePath === talk.logo
                    )?.node.childImageSharp.gatsbyImageData

                    return <StyledTalkEntry key={index}>
                            <strong>{talk.subject}</strong> <br/>
                            <div style={{display: "flex", alignItems: 'center'}}>
                                <GatsbyImage style={{ borderRadius: '10px', margin: '0.2rem' }} image={getImage(imageData)} alt="conference logo" />
                                {talk.conference} <br/>
                            </div>
                            <FontAwesomeIcon size="sm"
                                             icon={faMapMarkerAlt}></FontAwesomeIcon> {talk.date} {talk.location}
                    </StyledTalkEntry>
                })}
            </StyledTalks>
        </>
    )
}

export default Work
