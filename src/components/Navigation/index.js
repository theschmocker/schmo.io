import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';

const Navigation = () => (
    <Nav>
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
    </Nav>
)

const NavLink = ({ to, children }) => (
    <Link 
        to={to}
        activeStyle={{
            borderBottom: '2px solid black',
        }}
    >
        {children}
    </Link>
)

export default Navigation;

// Styled Components

const Nav = styled.nav`
    ul {
        list-style-type: none;        
        display: flex;
        margin-left: 0;
        padding: 0;
        li {
            margin-bottom: 0;
            a {
                font-family: 'Mina', sans-serif;
                text-transform: uppercase;
                font-weight: bold;
                &:hover {
                    border-bottom: 2px solid #333;
                }
            }

            &:after {
                font-size: 1.25rem;
                content: "/";
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
