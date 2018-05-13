import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Heading from '../components/ContentHeading';

const AboutPage = () => (
    <AboutWrapper>
        <AboutMe />
        <AboutSection>
            <Heading>Skills</Heading>
            <p>
            </p>
        </AboutSection>
        <AboutSection>
            <Heading>About this Site</Heading>
            <p>
            </p>
        </AboutSection>
    
  </AboutWrapper>
)

const AboutMe = () => (
    <section>
        <Heading>About Me</Heading>
        <p>
            Hey there. My name is Jacob Schmocker, but you can call me Schmo. I'm a self-taught web developer (in progress) from Wisconsin.
        </p>
        <p>
            My first computer was a hand-me-down Gateway running Windows 98. Because I like to keep with the times, I left that PC behind long, long ago. 
        </p>
    </section>

)

export default AboutPage

// Styled Components

const AboutWrapper = styled.article`
    margin: 0;
    padding: 1.75rem;
    background: #444;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
    color: #ddd;
    min-height: 100vh;
`;

const AboutSection = styled.section`

`;
