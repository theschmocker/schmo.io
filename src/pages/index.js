import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';

const IndexPage = ({ transition }) => (
  <Section style={transition && transition.style}>
    <h1>Jacob Schmocker</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Section>
)

export default IndexPage
