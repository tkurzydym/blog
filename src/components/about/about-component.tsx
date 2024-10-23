import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledPicture = styled.div`
  padding: 1rem;

  @media only screen and (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 951px) {
    width: 50%;
    float: right;
  }
`
const StyledAboutMeText = styled.div`
  padding: 1rem;

  @media only screen and (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 951px) {
    width: 50%;
    float: left;
  }
`

const About = () => {
  return (
    <>
      <h1>This is me!</h1>
      <StyledAboutMeText>
        <p>
          My name is Tobias. I'm a Software Developer and -Architect.
        </p>
        <p>
          I have mainly worked on enterprise applications following the Domain
          Driven Design approach and using frameworks like Spring Boot and
          Quarkus.
          Starting with monoliths, I have gone through different
          architecture variants and am currently working on a cloud-native
          microservice platform.
          More recently, I got more and more into Platform Engineering
          and Software Reliability Engineering, though my tech heart still beats for the
          application development part of the job.
          Over the years, I have grown a love for software craftsmanship and clean code.
        </p>
        <p>
          In my spare time I enjoy being outside on my gravel bike or on the contrary being
          inside in my Sim Racing Cockpit and race online against other people on iRacing.
        </p>
      </StyledAboutMeText>
      <StyledPicture>
        <StaticImage
          src="../../images/about4.jpg"
          alt="It's a picture of me."
          width={600}
          height={800}
          layout="constrained"
          placeholder="blurred"
        ></StaticImage>
      </StyledPicture>
    </>
  )
}

export default About
