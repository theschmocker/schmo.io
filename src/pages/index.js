import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';

const IndexPage = ({ transition }) => (
  <Section style={transition && transition.style}>
    <h2>Hey. I'm Schmo.</h2>
    <p>I'm a web developer from rural Wisconsin.</p>
    <h3>Wanna know more?</h3>
    <p>Find out a bit more about me <Link to="/about">here</Link>. Take a look at some of my projects <Link to="/projects">here</Link>.</p>

    
  </Section>
)

export default IndexPage
