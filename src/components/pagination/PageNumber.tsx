import React, { useState } from 'react'
import styled from 'styled-components';

const Number = styled.span<{ isActive: boolean; }>`
    background-color : ${props => props.isActive ? "#68B0AB" : "#ffffff"};
    padding : 3px 5px;
    border-radius : 10px;
    color : black;
    min-width : 15px;
    text-align:center;
`

interface PageNumberProps {
    number: number
}

const PageNumber: React.FC<PageNumberProps> = ({ number }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <Number isActive = {isActive} onClick = {() => setIsActive(!isActive)}>{number}</Number>
    )
}

export default PageNumber