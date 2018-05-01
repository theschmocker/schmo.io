import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';

import Navigation from '../Navigation';

const Header = () => (
    <HeaderWrapper>
        <Heading><Link to="/">schmo</Link></Heading>
        <Navigation />
    </HeaderWrapper>
)

export default Header

// Styled Components

const HeaderWrapper = styled.div`
    height: 100px;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    background: #444;
    border-top: 6px solid #bd1d00;
    text-shadow: 0 0 7px #333;
    a {
        text-decoration: none;
        color: #ddd;

        &:visited {
            color: #ddd;
        }
    }

    @media screen and (min-width: 650px) {
    }
`;

const Heading = styled.h1`
    font-size: 2rem;
    font-family: 'Mina', serif;
    text-transform: uppercase;
`;

