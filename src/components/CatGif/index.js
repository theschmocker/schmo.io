import React from 'react';
import styled from 'styled-components';

import cat from '../../media/cat-typing.mp4';

const CatGif = ({ className }) => (
    <video 
        className={className}
        autoPlay 
        muted 
        loop src={cat}
    ></video>
)

export default  styled(CatGif)`
    margin: 1rem auto;
    padding: 7px;
    width: 100%;
    border: 1px solid #999;
`;
