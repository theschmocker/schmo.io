import React, { Component } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

class TypedWrapper extends Component {
    componentDidMount() {
        const { strings } = this.props;

        const options = {
            strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <StyledTyped className={this.props.className}>
                <span ref={el => this.el = el}></span>
            </StyledTyped>
        );
    }
}

export default TypedWrapper;

const StyledTyped = styled.div`
    background: #eee;
    font-family: monospace;
    padding: 2.5px;
    color: #333;
    width: 100%;
    max-width: 240px;
    font-weight: bold;
    font-size: 1.1rem;
`;
