import React from 'react';

import StyledField from './StyledField';

function Field({ coordinates, isPlaying, isHovered, hoverHeandler }) {

    return (
        <StyledField
            isPlaying={isPlaying}
            isHovered={isHovered}
            onPointerEnter={() => hoverHeandler(coordinates, isHovered)}
        ></StyledField>
    );
}

export default Field;
