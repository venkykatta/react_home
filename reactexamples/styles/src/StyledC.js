import React from 'react';
import styled from 'styled-components'

const Box=styled.div`
    background-color:#233043;
    padding:15px;
    border-radius:5px;
`;

function StyledC() {
    return <div>
    <Box>
        <h1>This is using styled component</h1>
    </Box>
    </div>
}

export default StyledC;