import React from 'react'
import RecFilms from '../../components/recommended-films/RecFilms';
import Slider from '../../components/slider/Slider';
import { Container, SectionTitle } from '../../styles/GlobalStyles'
import { useAppSelector } from '../../utils/hooks/hooks';



function FilmsPage() {
  const loadingOfSlider = useAppSelector(state => state.films.loading)
  const loadingOfRecs = useAppSelector(state => state.recs.loading);

  // if (loadingOfSlider === "pending" || loadingOfRecs === "pending") {
  //   return <div>Loading</div>
  // }
  return (
    <Container>
      <SectionTitle>Popular films</SectionTitle>
      <Slider />
      <RecFilms />
    </Container>
  )
}

export default FilmsPage