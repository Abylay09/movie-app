import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { FilmBody, FilmBottom, FilmHeader, FilmImage, FilmItem, FilmTitle, RecFilmsWrapper } from '../../../components/recommended-films/RecFilms';
import Spinner from '../../../components/ui/Spinner';
import { useAppSelector } from '../../../utils/hooks/hooks';

function SearchedFilms() {
    const searchedFilms = useAppSelector(state => state.search.searchedFilms).filter(item => item.backdrop_path ? item.backdrop_path : false);
    const loading = useAppSelector(state => state.search.loading);
    const navigate = useNavigate();

    const Wrapper = styled(RecFilmsWrapper)`
        margin-top : 50px;
    `

    return (
        <div>
            {loading === "idle" ? <></>
                : loading === "pending" ? <Spinner />
                    : loading === "succeeded" ? <Wrapper>
                        {searchedFilms.map((film, index) => (
                            <FilmItem key={index}>
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
                        ))}
                    </Wrapper>
                        : <>Error</>}

        </div>
    )
}

export default SearchedFilms