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
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
    a {
        text-decoration: none;
        color: #333;

        &:visited {
            color: #333;
        }
    }

    @media screen and (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    }
`;

const Heading = styled.h1`
    font-size: 2rem;
    font-family: 'Mina', serif;
    text-transform: uppercase;
`;

