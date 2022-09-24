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
          My name is Tobias. I'm a Software Engineer / Enterprise Developer with
          about 7 years of experience including my 3 years of apprenticeship.
        </p>
        <p>
          I have mainly worked on enterprise applications following the Domain
          Driven Design approach and using frameworks like Spring Boot and
          Quarkus. Starting with monoliths, I have gone through different
          architecture variants and am currently working on a cloud-native
          microservice platform. More recently, I started working on MLOps
          (Machine Learning Operations) with a focus on learning how to operate
          software based on machine learning systems in production. Over the
          years, I have grown a love for software craftsmanship and clean code.
        </p>
        <p>
          In my spare time, I enjoy being outside on my gravel bike or climbing
          at our local bouldering gym.
        </p>
      </StyledAboutMeText>
      <StyledPicture>
        <StaticImage
          src="../../images/Tobias-bearbeitet.jpg"
          alt="It's a picture of me."
          width={400}
          height={500}
          layout="constrained"
          placeholder="blurred"
        ></StaticImage>
      </StyledPicture>
    </>
  )
}

export default About
