import React from 'react'
import { useParams } from 'react-router';
import FilmsCredits from '../../components/film/FilmsCredits';
import { Container } from '../../styles/GlobalStyles'
import ActorInfo from './components/ActorInfo';


function ActorPage() {
    const { id } = useParams() as { id: string };
    return (
        <Container>
            <ActorInfo />
            <FilmsCredits id={id} />
        </Container>


    )
}

export default ActorPage