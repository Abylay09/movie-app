import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import { FilmData } from '../../components/film/FilmPage';
import FilmsCredits from '../../components/film/FilmsCredits';
import Spinner from '../../components/ui/Spinner';
import { ArticleText, Container } from '../../styles/GlobalStyles'
import { getActorFilms, getActorInfo } from '../../utils/api/getActor';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'
import { ActorImage } from '../search/components/SearchedActors';
import ActorInfo from './components/ActorInfo';


function ActorPage() {
    const { id } = useParams() as { id: string };
    return (
        <>
            <ActorInfo />
            <FilmsCredits id={id} />
        </>


    )
}

export default ActorPage