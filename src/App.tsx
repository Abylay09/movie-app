import React from 'react';
import { Title, Subtitle, Container } from './styles/GlobalStyles';
import background from "assets/images/background.png"

function App() {
  return (
    <Container>
      <div>
        <img src={background} alt="" />
      </div>
        <Title>Ablay</Title>
    </Container>
  );
}

export default App;
