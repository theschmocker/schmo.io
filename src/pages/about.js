import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const AboutPage = () => (
    <AboutWrapper>
        <AboutSection>
            <H2>About Me</H2>
            <p>
                Ugh four dollar toast mustache celiac poutine dreamcatcher. Truffaut irony man bun tote bag. Chicharrones stumptown you probably haven't heard of them, banh mi craft beer marfa roof party quinoa yr neutra snackwave food truck. Brunch schlitz banjo chillwave, cloud bread small batch hashtag pop-up affogato keffiyeh meh unicorn hexagon.
            </p>
        </AboutSection>
        <AboutSection>
            <H2>Skills</H2>
            <p>
            </p>
        </AboutSection>
        <AboutSection>
            <H2>About this Site</H2>
            <p>
            </p>
        </AboutSection>
    
  </AboutWrapper>
)

export default AboutPage

const AboutWrapper = styled.article`
    margin: 0;
    padding: 1.75rem;
    background: #444;
    font-family: 'Open Sans', sans-serif;
    color: #ddd;
    min-height: 100vh;
`;

const AboutSection = styled.section`

`;

const H2 = styled.h2`
    position: relative;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    width: intrinsic;
    width: max-content;
    color: #eee;
    &:after {
        content: "";
        position: absolute;
        display: block;
        bottom: -6px;
        width: 50%;
        height: 3px;
        background: #bd1d00;
    }
`;
