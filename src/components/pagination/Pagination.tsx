import React, { useState } from 'react'
import styled from 'styled-components';
import { getRecommendations } from '../../utils/api/getFilms';
import { useAppDispatch } from '../../utils/hooks/hooks';

const PageNumber = styled.span`
    background-color : #ffffff;
    padding : 3px 5px;
    border-radius : 10px;
    color : black;
    min-width : 15px;
    text-align:center;
`


export default function Pagination() {
    let pages: number[] = [1, 2, 3, 4, 5];
    const dispatch = useAppDispatch()

    function togglePage(e: any) {
        let listOFNumber = Array.from(document.getElementsByClassName("page-number") as HTMLCollectionOf<HTMLElement>);
        listOFNumber.forEach(item => item.style.backgroundColor = "#ffffff")
        e.target.style.backgroundColor = "red"
    }
    return (
        <div>
            {pages.map((_, index) => <PageNumber className='page-number' onClick={(e) => {
                togglePage(e)
                dispatch(getRecommendations(index + 3))
            }}>{index + 1}</PageNumber>)}
        </div>
    )
}

// import { IRecommendedFilm } from "../../types/interfaces";

// const PaginationWrapper = styled.div`
//     display : flex;
// `

// interface PageNumberProps {
//     isActive: boolean;
// }

// const PageNumber = styled.span<{ isActive: boolean; }>`
//     background-color : ${props => props.isActive ? "#68B0AB" : "#ffffff"};
//     padding : 3px 5px;
//     border-radius : 10px;
//     color : black;
//     min-width : 15px;
//     text-align:center;
// `

// interface PaginationProps {
//     recommendations: Array<IRecommendedFilm>
// }

// function Pagination({ recommendations }: PaginationProps) {
//     const [page, setPage] = useState(1);
//     const [isActive, setIsActive] = useState<boolean>(false);

//     const handleClick = (e: any) => {
//         e.target.classList.toggle("add")
//     };

//     return (
//         <PaginationWrapper>
//             {recommendations.map((_, index) => <PageNumber isActive={isActive} onClick={(e) => handleClick(e)}>{index + 1}</PageNumber>)}
//         </PaginationWrapper>
//     )
// }

// export default Pagination