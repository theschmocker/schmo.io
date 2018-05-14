import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Heading from '../components/ContentHeading';
import CatGif from '../components/CatGif';

const AboutPage = () => (
    <AboutWrapper>
        <AboutMe />
        <AboutSection>
            <Heading>Skills</Heading>
            <p>
            </p>
        </AboutSection>
        <AboutThisSite />
    
  </AboutWrapper>
)

const AboutMe = () => (
    <section>
        <Heading>About Me</Heading>
        <p>
            Hey there. My name is Jacob Schmocker, but you can call me Schmo. 
            I'm a self-taught web developer (in progress) from Wisconsin.
        </p>
        <p>
            My first computer was a hand-me-down Gateway running Windows 98. 
            I was enamored.
            Because I like to keep with the times, I left that PC behind long, long ago. 
            My enthusiasm for tech stuck around, though.
        </p>
        <p>
            The web is a wonderful (and sometimes ugly) amalgam of art, engineering, ingenuity, and information that has the profound capability to better the way we see and interact with the world; I want to be a part of that.
        </p>
        <p>But mostly, I just wanna build cool stuff.</p>
        <CatGif />

    </section>

)

const AboutThisSite = () => (
    <section>
        <Heading>About this Site</Heading>
        <p>
            This site was built with <StyledAnchor href="https://gatsbyjs.org">Gatsby</StyledAnchor>, a static site generator built around <StyledAnchor href="https://reactjs.org">React</StyledAnchor>. A couple third-party React and Gatsby plugins bring it all together. You can check them out, along with my code, on <StyledAnchor href="https://github.com/theschmocker/schmo.io.git">Github</StyledAnchor>!
        </p>
    </section>
)

const StyledAnchor = styled.a`
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #ddd;
    font-weight: bold;
    transition: transform 0.25s ease;

    &:after {
        content: "";
        position: absolute;
        display: block;
        bottom: -2px;
        left: 50%;
        height: 2px;
        width: 0;
        transform: translateX(-50%);
        background: hsl(9, 90%, 45%);
        transition: width 0.25s ease;
    }

    &:hover {
        transform: translateY(-2px);
        &:after {
            width: 90%;
        }
    }
`;

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
