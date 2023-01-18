import React from 'react';
import {Title,Container } from './styles/GlobalStyles';
import background from "./assets/images/background.jpg"
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const BgWrapper = styled.div`
  width : 100vw;
  height : 100vh;
  background : url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  position : relative;
  &::before{
    position : absolute;
    content : "";
    top : 0;
    left : 0;
    background : rgba(0,0,0,0.7);
    width : 100%;
    height : 100%;
  }
`

const MainInfo = styled.div`
  height : 100vh;
  width : 100%;
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
`

const MainTitle = styled(Title)`
  font-weight : 600;
  font-size : 48px;
`

const Button = styled.button`
  font-family : ${props => props.theme.fontFamily.second};
  font-size : 18px;
  font-weight : bold;
  border : 2px solid ${props => props.theme.colors.main};
  background : transparent;
  color : #fff;
  padding : 12px;
  width : 180px;
  border-radius : 12px;
  transition : transform 0.3s;
  &:hover{
    cursor : pointer;
    transform: scale(1.1);
    color : white;
  }
`

function App() {
  const navigate = useNavigate();
  return (
    <BgWrapper>
      <Container>
        <MainInfo>
          <MainTitle >Movies, TV series and more</MainTitle>
          <Button onClick={() => navigate("/films")}>Find movies</Button>
        </MainInfo>
      </Container>
    </BgWrapper>
  );
}

export default App;
