import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
    height : 100%;
    width : 100%;
    position : relative;
    margin-top : 20%;
    // display : flex;
    // align-items:center;
    // justify-content:space-between;
`

const SpinnerItem = styled.div`
    position : absolute;
    left : 50%;
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;
`

function Spinner() {
    return (
        <SpinnerContainer>
            <SpinnerItem></SpinnerItem>
        </SpinnerContainer>
    )
}

export default Spinner