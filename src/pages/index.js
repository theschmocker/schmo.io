import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';
import IdentityCard from '../components/IdentityCard';
import styled from 'styled-components';

//<video style={{ margin: '0 auto', }} autoPlay={true} muted loop src={typingCat}/>
//<Particles height="100vh"/>
const IndexPage = ({ data }) => (    
    <div>
        <IndexWrapper>
            <IdentityCard image={data.file.childImageSharp}/>
        </IndexWrapper>
    </div>
)

const IndexWrapper = styled.div`
    @media screen and (min-width: 500px) {
        min-height: calc(100vh - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default IndexPage

export const query = graphql`
    query ProfilePhoto {
        file(relativePath: {eq: "media/me3.jpg"}) {
            childImageSharp {
                resolutions(width: 200, height: 200) {
                    ...GatsbyImageSharpResolutions_tracedSVG
                }
            }
        }

    }
`;
