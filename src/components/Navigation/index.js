import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import NavLink from './NavLink';

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
                    <NavLink
                        to={page.route} 
                        onClick={this.closeMenu}
                        key={page.linkText}
                    >
                        {page.linkText}
                    </NavLink>
                ))}
            </Menu>
        )
    }
}

export default Navigation;
