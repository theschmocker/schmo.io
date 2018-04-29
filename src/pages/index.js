import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';
import typingCat from '../media/cat-typing.mp4';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import Typed from 'react-typed';

//<video style={{ margin: '0 auto', }} autoPlay={true} muted loop src={typingCat}/>
//<Particles height="100vh"/>
const IndexPage = ({ transition }) => (    
    <div>
    <Section style={transition && transition.style}>
        <IdentityCard />
    </Section>
    </div>
)

const IdentityCard = () => (
    <StyledID>
        <ImageContainer>
            <img src="https://placeimg.com/250/250/people"/>
        </ImageContainer>
        <Separator />
        <InfoContainer>
            <div>
                <h2>Hey. I'm Schmo.</h2>
                <p>I'm a</p>
            </div>
        </InfoContainer>
    </StyledID>
)

const ImageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

    & img {
        border-radius: 50%;
    }
`;

const InfoContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(50% - 1px);
    height: 100%;
`;

const Separator = styled.div`
    width: 2px;
    height: 60%;
    background: #aaa;
`;

const StyledID = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height 300px;
    background: #444;
    color: #eee;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
`;

export default IndexPage
