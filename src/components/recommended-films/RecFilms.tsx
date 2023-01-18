import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getRecommendations } from '../../utils/api/getFilms'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'

const RecFilmsWrapper = styled.section`
    display  :grid;
    // grid-template-columns : repeat(4,1fr);
    grid-template-columns : repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows :  auto;
    grid-gap : 30px;
`

const FilmItem = styled.div`
    border : 1px solid rgba(255,255,255,0.6);
    padding-bottom : 12px;
`

const FilmHeader = styled.div`
    height : 70%;
`

const FilmBody = styled.div`
    padding : 0 8px;
`

const FilmBottom = styled.div`
    display : flex;
    justify-content : space-between;
`

const FilmImage = styled.img`
    width : 100%;
    max-width : 100%;
    height : 100%;
    object-fit : cover;
`

function RecFilms() {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.recs.loading);
    const recommendations = useAppSelector(state => state.recs.recommendations);

    useEffect(() => {
        dispatch(getRecommendations())
    }, [])

    if (loading === "pending") {
        return <div>Loading...</div>
    }
    console.log(recommendations);

    return (
        <RecFilmsWrapper>
            {recommendations.map(film => {
                return (
                    <FilmItem>
                        <FilmHeader>
                            <FilmImage src={"https://image.tmdb.org/t/p/original" + film.backdrop_path} alt={film.title} />
                        </FilmHeader>
                        <FilmBody>
                            <h1>{film.title}</h1>
                            <FilmBottom>
                                <span>Rating {film.vote_average}</span>
                                <span> {film.release_date.split("-").reverse().join("-")}</span>
                            </FilmBottom>
                        </FilmBody>
                    </FilmItem>
                )
            })}

        </RecFilmsWrapper>
    )
}

export default RecFilms