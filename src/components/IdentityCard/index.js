import React from 'react';
import SocialLinks from '../../components/SocialLinks';
import TypedWrapper from '../../components/Typed';
import styled from 'styled-components';

const typedStrings = [
    '^1200Web Developer',
    'Linux Enthusiast',
    'Coffee Lover',
    'Wannabe Beer Snob',
].map(str => str + '^750'); // pause at the end of each string

const IdentityCard = () => (
    <StyledID>
        <ImageContainer>
            <img src="https://placeimg.com/200/200/people"/>
        </ImageContainer>
        <Separator />
        <InfoContainer>
            <h2>Hey. I'm Schmo.</h2>
            <p>I'm a</p>
            <TypedWrapper 
                className="typed" 
                strings={ typedStrings } />
            <SocialLinks />
        </InfoContainer>
    </StyledID>
)

const ImageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slideFromLeft 1s;
    width: 80%;

    img {
        border-radius: 50%;
        filter: drop-shadow(0 0px 7px #444);
        width: 70%;
    }

    @media screen and (min-width: 650px) {
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
    width: 80%;
    padding: 1rem 1.5rem;

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
    font-family: "Merriweather", sans-serif;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    background: #444;
    color: #eee;
    animation: none;
    width: 100%;
    height: 100vh;;

    @media screen and (min-width: 650px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        width: 600px;
        height 300px;
        padding-top: 0;
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
