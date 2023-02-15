import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { IFilm } from '../../types/interfaces';
import { getActorFilms } from '../../utils/api/getActor';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import Pagination from '../pagination/Pagination';
import { FilmBody, FilmBottom, FilmHeader, FilmImage, FilmItem, FilmTitle, RecFilmsWrapper } from '../recommended-films/RecFilms';
import Spinner from '../ui/Spinner';

const ActorFilmsWrapper = styled(RecFilmsWrapper)`
    grid-auto-rows :  minmax(400px, auto);;
`

interface FilmsCreditsProps {
    id: string
}

const FilmsCredits: React.FC<FilmsCreditsProps> = ({ id }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector(store => store.actor)

    const [filmsData, setFilmsData] = useState<IFilm[]>([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(6);

    useEffect(() => {
        dispatch(getActorFilms(id)).unwrap()
            .then((data) => setFilmsData(data.cast))
    }, [])

    const lastFilmIndex = currentPage * itemsPerPage;
    const firstFilmIndex = lastFilmIndex - itemsPerPage;
    const currentFilms = filmsData.slice(firstFilmIndex, lastFilmIndex);

    return (
        loading === "pending" ? <Spinner /> :
            loading === "succeeded" ? <>
                <h2>Participation in projects</h2>
                <ActorFilmsWrapper>
                    {currentFilms.map(film =>
                        <FilmItem onClick={() => navigate(`/film/${film.id}`)}>
                            <FilmHeader>
                                {
                                    film.backdrop_path
                                        ? <FilmImage src={"https://image.tmdb.org/t/p/w500" + film.backdrop_path} alt={film.title} />
                                        : <div style={{ height: "65%" }}></div>
                                }

                            </FilmHeader>
                            <FilmBody>
                                <FilmTitle>{film.title}</FilmTitle>
                                <FilmBottom>
                                    <span>Rating {film.vote_average}</span>
                                    <span> {film.release_date.split("-").reverse().join("-")}</span>
                                </FilmBottom>
                            </FilmBody>

                        </FilmItem>)}
                </ActorFilmsWrapper>

                <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalPages={filmsData.length} setcurrentPage={setcurrentPage} />
            </>
                : <div>Failed</div>

    )
}

export default FilmsCredits