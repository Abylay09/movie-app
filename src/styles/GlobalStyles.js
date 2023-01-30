import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #161618;
    color : #fff;
    height : 100vh;
  }
`;

export const Container = styled.div`
    max-width : 1200px;
    width : 100%;
    // height : 100%;
    margin : 0 auto;
    font-family : ${props => props.theme.fontFamily.main};
    position : relative;
    // overflow-x : hidden;
`
export const Title = styled.h1`
  font-family : ${props => props.theme.fontFamily.main};
`

export const SectionTitle = styled.h1`
  font-family : ${props => props.theme.fontFamily.main};
  font-size : 32px;
  color : #68B0AB;
`

export const Subtitle = styled.h2`
  font-family : ${props => props.theme.fontFamily.second};
`

export const Text = styled.h2`
  font-family : ${props => props.theme.fontFamily.second};
`

export const ArticleText = styled.p`
  text-align : justify;
  font-family : ${props => props.theme.fontFamily.second};
  font-size : 18px;
  margin : 0 0 24px 0 ;
`

