import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';
import Menu from 'react-burger-menu/lib/menus/slide';

class Navigation extends Component {
    state = {
        menuIsOpen: false,
    }

    closeMenu = () => {
        this.setState({ menuIsOpen: false });
    }

    render() {
        const pages = [
            { route: '/', linkText: 'Home' },
            { route: '/about', linkText: 'About' },
            { route: '/projects', linkText: 'Projects' },
            { route: '/blog', linkText: 'Blog' },
        ]
        return (
            <Menu isOpen={ this.state.menuIsOpen } right>
                {pages.map(page => (
                    <StyledNavLink
                        to={page.route} 
                        onClick={this.closeMenu}
                    >
                        {page.linkText}
                    </StyledNavLink>
                ))}
            </Menu>
        )
    }
}

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

export default Navigation;
