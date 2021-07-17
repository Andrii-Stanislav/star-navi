import React from 'react';

import StyledFieldsBox from './StyledFieldsBox';

function FieldsBox({ fields, children }) {
    return <StyledFieldsBox fields={fields}>{children}</StyledFieldsBox>;
}

export default FieldsBox;
