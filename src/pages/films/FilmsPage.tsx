import React from 'react'
import RecFilms from '../../components/recommended-films/RecFilms';
import Slider from '../../components/slider/Slider';
import { Container} from '../../styles/GlobalStyles'

function FilmsPage() {
  return (
    <Container>
      <Slider />
      <RecFilms />
    </Container>
  )
}

export default FilmsPage