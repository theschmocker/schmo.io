import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const NavLink = ({ to, children, className }) => (
    <Link 
        exact={ to === '/' }
        to={to}
        activeStyle={{
        }}
        className={className}
    >
        {children}
    </Link>
)

const StyledNavLink = styled(NavLink)`
    display: block;
    position: relative;
    padding: 0.75rem;
    padding-left: 2rem;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    &.active:before {
        content: "";
        position: absolute;
        display: block;
        background: #ffe8e4;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        top: calc(50% - 3.5px);
        left: calc(1rem - 3.5px);
    }
`;

export default StyledNavLink;
