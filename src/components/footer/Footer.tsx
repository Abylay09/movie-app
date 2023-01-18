import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyles'

const FooterWrapper = styled.footer`
    margin-top : 50px;
    width : 100%;
    height : 50px;
    background-color : #696D7D;
    color : #ffffff;
`

function Footer() {
    return (
        <FooterWrapper>
            <Container>
                Footer
            </Container>
        </FooterWrapper>
    )
}

export default Footer