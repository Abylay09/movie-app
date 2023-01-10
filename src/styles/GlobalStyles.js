import styled,{createGlobalStyle }from "styled-components"


 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #161618;
    color : #fff;
  }
`;

export const Container = styled.div`
    max-width : 1200px;
    width : 100%;
    margin : 0 auto;
`
export const Title = styled.h1`
  font-family : ${props => props.theme.fontFamily.main};
`

export const Subtitle = styled.h2`
  font-family : ${props => props.theme.fontFamily.second};
`

export const Text = styled.h2`
  font-family : ${props => props.theme.fontFamily.second};
`