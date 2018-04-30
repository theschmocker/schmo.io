import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const AboutPage = () => (
  <AboutWrapper>
    <H2>About Me</H2>
    <H2>Skills</H2>
    <H2>About this Site</H2>
    
  </AboutWrapper>
)

export default AboutPage

const AboutWrapper = styled.section`
    font-family: 'Open Sans', sans-serif;
`;

const H2 = styled.h2`
    position: relative;
    text-transform: uppercase;
    width: intrinsic;
    width: max-content;
    &:after {
        content: "";
        position: absolute;
        display: block;
        bottom: -6px;
        width: 50%;
        height: 6px;
        background: #bd1d00;
    }
`;
