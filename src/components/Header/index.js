import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';

const HeaderWrapper = styled.div`
    min-height: 100px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: none;
        color: #333;

        &:visited {
            color: #333;
        }
    }
`;

const Nav = styled.nav`
    ul {
        list-style-type: none;        
        display: flex;
        margin-left: 0;
        padding: 0;
        li {
            margin-bottom: 0;
            a {
                text-transform: lowercase;
                &:hover {
                    border-bottom: 3px solid blue;
                }
            }

            &:after {
                content: "/";
                font-weight: bold;
                margin: 0 0.5rem;
            }

            &:last-child {
                &:after {
                    content: "";
                    margin: 0;
                }
            }
        }
    }
`;

const Heading = styled.h1`
    font-size: 2rem;
    font-family: 'Mina', serif;
`;

const Header = () => (
    <HeaderWrapper>
        <Heading><Link to="/">schmo</Link></Heading>
        <Nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </Nav>
    </HeaderWrapper>

)

export default Header
