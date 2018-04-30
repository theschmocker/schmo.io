import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';
import IdentityCard from '../components/IdentityCard';
import styled from 'styled-components';

//<video style={{ margin: '0 auto', }} autoPlay={true} muted loop src={typingCat}/>
//<Particles height="100vh"/>
const IndexPage = () => (    
    <div>
        <Section>
            <IdentityCard />
        </Section>
    </div>
)

export default IndexPage
