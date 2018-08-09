import styled from 'styled-components';

export default styled.h2`
    position: relative;
    margin: 0 0 1.5rem 0;
    text-transform: uppercase;
    width: intrinsic;
    width: max-content;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #eee;
    &:after {
        content: "";
        position: absolute;
        display: block;
        bottom: -4px;
        width: 55%;
        height: 3px;
        background: #bd1d00;
    }
`;
