import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';
import Menu from 'react-burger-menu/lib/menus/slide';

//const Navigation = () => (
//    <Nav>
//        <ul>
//            <li><NavLink to="/about">About</NavLink></li>
//            <li><NavLink to="/projects">Projects</NavLink></li>
//            <li><NavLink to="/blog">Blog</NavLink></li>
//        </ul>
//    </Nav>
//)
const Navigation = () => (
    <Menu customCrossIcon={ 
    <svg width="100px" height="100px" viewPort="0 0 30 30" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11" 
            x2="11" y2="1" 
            stroke="#ddd" 
            strokeWidth="2"/>
        <line x1="1" y1="1" 
            x2="11" y2="11" 
            stroke="#ddd" 
            strokeWidth="2"/>
    </svg>
    } right>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
    </Menu>
)

const NavLink = ({ to, children }) => (
    <Link 
        exact
        to={to}
        activeStyle={{
            borderBottom: '2px solid #ccc',
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
                    border-bottom: 2px solid #999;
                }
            }

            &:after {
                font-size: 1.25rem;
                content: "/";
                margin: 0 0.5rem;
                opacity: 0.8;
                color: #bbb;
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
