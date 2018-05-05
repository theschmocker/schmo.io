import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Heading from '../components/ContentHeading';

const AboutPage = () => (
    <AboutWrapper>
        <AboutSection>
            <Heading>About Me</Heading>
            <p>
                Ugh four dollar toast mustache celiac poutine dreamcatcher. Truffaut irony man bun tote bag. Chicharrones stumptown you probably haven't heard of them, banh mi craft beer marfa roof party quinoa yr neutra snackwave food truck. Brunch schlitz banjo chillwave, cloud bread small batch hashtag pop-up affogato keffiyeh meh unicorn hexagon.
            </p>
            <p>Next level flexitarian woke unicorn, VHS cliche humblebrag yr schlitz brunch man braid tote bag food truck cray. Marfa twee subway tile next level pug keytar direct trade jean shorts synth plaid cardigan sriracha actually put a bird on it bespoke. Mixtape PBR&amp;B celiac beard palo santo marfa glossier before they sold out post-ironic. </p>
        </AboutSection>
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
