import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getRecommendations } from '../../utils/api/getFilms'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'
import Pagination from '../pagination/Pagination'
import { SectionTitle } from '../../styles/GlobalStyles'
import { useNavigate } from 'react-router'
import Spinner from '../ui/Spinner'

export const RecFilmsWrapper = styled.section`
    display  :grid;
    grid-template-columns : repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows : auto;
    grid-gap : 30px;
`

export const FilmItem = styled.div`
    border : 1px solid rgba(255,255,255,0.6);
`

export const FilmHeader = styled.div`
    height : 65%;
`

export const FilmBody = styled.div`
    padding : 0 8px 20px;
`
export const FilmTitle = styled.p`
    font-size : 20px;
    font-weight : 500;
`

export const FilmBottom = styled.div`
    display : flex;
    justify-content : space-between;
`

export const FilmImage = styled.img`
    width : 100%;
    max-width : 100%;
    height : 100%;
    object-fit : cover;
`

function RecFilms() {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.recs.loading);
    const recommendations = useAppSelector(state => state.recs.recommendations);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getRecommendations(2))
    }, [])

    if (loading === "pending") {
        return <Spinner/>
    }

    return (
        <>
            <SectionTitle>Reccomendations</SectionTitle>
            <RecFilmsWrapper>
                {recommendations.map(film => {
                    return (
                        <FilmItem>
                            <FilmHeader onClick={() => navigate(`/film/${film.id}`)}>
                                <FilmImage src={"https://image.tmdb.org/t/p/original" + film.backdrop_path} alt={film.title} />
                            </FilmHeader>
                            <FilmBody>
                                <FilmTitle>{film.title}</FilmTitle>
                                <FilmBottom>
                                    <span>Rating {film.vote_average}</span>
                                    <span> {film.release_date.split("-").reverse().join("-")}</span>
                                </FilmBottom>
                            </FilmBody>
                        </FilmItem>
                    )
                })}
            </RecFilmsWrapper>
        </>

    )
}

export default RecFilms