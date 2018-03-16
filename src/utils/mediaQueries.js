import { css } from 'styled-components';

const breakpoints = {
    desktop: 992,
    tablet: 768,
    phone: 376
}

export default const media = 
    Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args) => css`
            @media (max-width: ${breakpoints[label]}px) {
                ${css(...args)}
            }
        `;

        return acc;
    }, {});
