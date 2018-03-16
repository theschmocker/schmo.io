import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';

const AboutPage = ({ transition }) => (
  <Section style={transition && transition.style}>
    <h2>Hey there</h2>
    <p>Call me <em>Schmo</em>. My name is actually Jacob Schmocker, but <em>Schmo</em> is what my friends call me.</p>
    <p>Until I write a real description for myself, this is what you get. A placeholder. You won't get to read about what I'm like, what I do, or that I'm a web developer. Or that I'm a (GNU/)Linux enthusiast.</p>
    <p>A wannabe beer and coffee snob.</p>
    <p>Lover of (usually dystopian) fiction.</p>
    <p>Student.</p>
    <p>. . .</p>
    <p><strong>This is all you get</strong>: a placeholder populated with Schmocker-ipsum.</p>
    
    <p><em><small>TODO: Make the good typography.</small></em></p>
  </Section>
)

export default AboutPage
