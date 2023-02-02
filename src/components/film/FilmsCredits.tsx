import React, { useEffect, useState } from 'react'
import { IFilm } from '../../types/interfaces';
import { getActorFilms } from '../../utils/api/getActor';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import Pagination from '../pagination/Pagination';
import Spinner from '../ui/Spinner';

interface FilmsCreditsProps {
    id: string
}

const FilmsCredits: React.FC<FilmsCreditsProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const { films, loading } = useAppSelector(store => store.actor)
    const [filmsData, setFilmsData] = useState<IFilm[]>([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    useEffect(() => {
        dispatch(getActorFilms(id)).unwrap()
            .then((data) => setFilmsData(data.cast))  
    }, [])

    const lastFilmIndex = currentPage * itemsPerPage;
    const firstFilmIndex = lastFilmIndex - itemsPerPage;
    const currentFilms = filmsData.slice(firstFilmIndex, lastFilmIndex);

    return (
        // <div></div>
        loading === "pending" ? <Spinner /> :
            loading === "succeeded" ? <>
                {currentFilms.map(film => <span>{film.title}</span>)}
                <Pagination itemsPerPage = {itemsPerPage} totalPages = {filmsData.length} lastFilmIndex={lastFilmIndex} firstFilmIndex={firstFilmIndex} setcurrentPage = {setcurrentPage}/>
            </>
                : <div>Failed</div>

    )
}

export default FilmsCredits