import React, { useEffect, useState } from 'react'
import { showListFilms } from '../../store/films/actorSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';

interface PaginationProps {
    firstFilmIndex: number,
    lastFilmIndex: number,
    setcurrentPage: (page: number) => void,
    totalPages : number,
    itemsPerPage : number
}

const Pagination: React.FC<PaginationProps> = ({ firstFilmIndex, lastFilmIndex, setcurrentPage, totalPages, itemsPerPage }) => {
    // const { films } = useAppSelector(store => store.actor);
    const dispatch = useAppDispatch();
    // const [totalPages, setTotalPages] = useState(0);
    // const [currentPage, setcurrentPage] = useState(1);
    // const [itemsPerPage, setitemsPerPage] = useState(5);

    // useEffect(() => {
    //     setTotalPages(films.length)
    // }, [])

    // const lastFilmIndex = currentPage * itemsPerPage;
    // const firstFilmIndex = lastFilmIndex - itemsPerPage;

    const pages = [];

    // for (let i = 1; i <= 3; i++) {
    //     pages.push(i);
    // }
    for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
        pages.push(i);
    }


    // const handleClick = (event: any) => {
    //     setcurrentPage(Number(event.target.id));
    // };


    return (
        <div>
            {pages.map((page) => <span onClick={() => {

                // dispatch(showListFilms({
                //     firstFilmIndex: firstFilmIndex,
                //     lastFilmIndex: lastFilmIndex
                // }))
                setcurrentPage(page)
            }
            }>{page}</span>)
            }
        </div >
    )
}

export default Pagination