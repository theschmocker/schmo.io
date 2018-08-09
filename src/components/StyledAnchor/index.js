import styled from 'styled-components';

const StyledAnchor = styled.a`
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #ddd;
    font-weight: bold;
    transition: transform 0.25s ease;

    &:after {
        content: "";
        position: absolute;
        display: block;
        bottom: -2px;
        left: 50%;
        height: 2px;
        width: 0;
        transform: translateX(-50%);
        background: hsl(9, 90%, 45%);
        transition: width 0.25s ease;
    }

    &:hover {
        transform: translateY(-2px);
        &:after {
            width: 90%;
        }
    }
`;

export default StyledAnchor;
