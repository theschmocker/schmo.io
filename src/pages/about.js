import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Hey there</h2>
    <p>Call me "Schmo". My name is actually Jacob Schmocker, but "Schmo" is what my friends call me.</p>
    <p>Until I write a real description for myself, this is what you get. A placeholder. You won't get to read about what I'm like, what I do, or that I'm a web developer. Or that I'm a (GNU/)Linux enthusiast.</p>
    <p>A wannabe beer and coffee snob.</p>
    <p>Lover of (usually dystopian) fiction.</p>
    <p>Student.</p>
    <p>. . .</p>
    <p>This is all you get: a placeholder populated with Schmocker-ipsum.</p>
    
    <p><em>TODO: Make the good typography.</em></p>
  </div>
)

export default AboutPage
