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
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    &.active:after {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: calc(100% - 1.5rem);
        height: 3px;
        background: #bd1d00;
        margin: 0 0.75rem;

    }

`;

export default StyledNavLink;
