import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display : flex;
    justify-content : space-between;
    font-family : ${props => props.theme.fontFamily.main};
    padding : 10px 65px;
`
const HeaderTitle = styled.p`
    font-size : 36px;
    margin : 0;
    span{
        color : #68B0AB;
    }
`

const Menu = styled.nav`
    ul{
        display : flex;
        gap : 12px;
        list-style : none;
        li{
            cursor : pointer;
            position : relative;
            &::before{
                position : absolute;
                content : "";
                display : block;
                bottom : -2px;
                left : -100%;
                width : 100%;
                height : 1.5px;
                background : #fff;
                opacity : 0;
                transition : 1s;
                
            }
            &:hover{
                &::before{
                    left : 0;
                    opacity : 1;
                }
            }
        }
    }
`
function Header() {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <HeaderTitle>Kino<span>KZ</span></HeaderTitle>
            <Menu>
                <ul>
                    <li onClick={() => navigate("search")}>Search</li>
                    <li onClick={() => navigate("films")}>Films</li>
                </ul>
            </Menu>
        </HeaderWrapper>
    )
}

export default Header