import React from 'react';
import SocialLinks from '../../components/SocialLinks';
import TypedWrapper from '../../components/Typed';
import styled from 'styled-components';

import Img from 'gatsby-image';

import meJPG from '../../media/me3.jpg';

const typedStrings = [
    '^1200Web Developer',
    'Linux Enthusiast',
    'Coffee Lover',
    'Craft Beer Fan',
    'Student',
].map(str => str + '^750'); // pause at the end of each string

const IdentityCard = ({ image }) => (
    <StyledID>
        <ImageContainer>
            <Img resolutions={image.resolutions}/>
        </ImageContainer>
        <Separator />
        <InfoContainer>
            <h2>Hey. I'm <span className="underline">Schmo</span>.</h2>
            <p>I'm a</p>
            <TypedWrapper 
                className="typed" 
                strings={ typedStrings } 
            />
            <SocialLinks />
        </InfoContainer>
    </StyledID>
)

const ImageContainer = styled.section`
    display: none;
    justify-content: center;
    align-items: center;
    animation: slideFromLeft 1s;
    width: 70%;

    img {
        border-radius: 50%;
        filter: drop-shadow(0 0px 7px #444);
        width: 70%;
    }

    @media screen and (min-width: 650px) {
        display: flex;
        width: 50%;
        height: 100%;
        img {
            width: auto;
        }
    }

    @keyframes slideFromLeft {
        0% {
            transform: translateX(-1rem);
            opacity: 0;
        }
        50% {
            transform: translateX(-1rem);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    animation: slideFromRight 1s;
    width: 100%;
    padding: 1rem 3rem;
    padding-left: 1.5rem;

    h2 {
        margin-bottom: 1rem;
        text-shadow: 0 0 5px #222;
    }
    
    p {
        margin: 0;
        margin-bottom: 0.25rem;
        color: #ccc;
    }
    @media screen and (min-width: 650px) {
        width: calc(50% - 1px);
        height: 100%;
        padding: 2.1rem;
    }

    @keyframes slideFromRight {
        0% {
            transform: translateX(1rem);
            opacity: 0;
        }
        50% {
            transform: translateX(1rem);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const Separator = styled.div`
    width: 2px;
    height: 60%;
    background: #aaa;
    display: none;
    @media screen and (min-width: 650px) {
        display: block;
    }
`;

const StyledID = styled.main`
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #444;
    color: #eee;
    animation: none;
    width: 100%;
    min-height: calc(100vh - 100px);
    padding-bottom: 100px;

    @media screen and (min-width: 650px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        width: 600px;
        height 300px;
        min-height: 0;
        padding-bottom: 0;
        animation: fadeInUp 0.5s;
    }

    @keyframes fadeInUp {
        0% {
            transform: translateY(4rem);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

export default IdentityCard;
