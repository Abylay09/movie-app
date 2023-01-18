import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.p`
    font-size : 36px;
    margin : 0;
    span{
        color : #68B0AB;
    }
`

const HeaderWrapper = styled.header`
    font-family : ${props => props.theme.fontFamily.main};
    padding : 5px 15px;
`
function Header() {
    return (
        <HeaderWrapper>
            <HeaderTitle>Kino<span>KZ</span></HeaderTitle>
        </HeaderWrapper>
    )
}

export default Header