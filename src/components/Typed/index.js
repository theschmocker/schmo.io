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
    color: #333;
    width: 100%;
    font-weight: bold;
    font-size: 1.1rem;
`;
