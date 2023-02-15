import React from 'react'
import styled from 'styled-components';


interface PaginationProps {
    setcurrentPage: (page: number) => void,
    totalPages: number,
    itemsPerPage: number,
    currentPage: number
}


const PaginationWrapper = styled.div`
    display : flex;
    justify-content:center;
    gap : 12px;
    margin-top : 25px;
    flex-wrap : wrap;
    @media (max-width : ${props => props.theme.breakpoints.md}){
       
    }
`

const Number = styled.span<{ selected: boolean }>`
  background : ${props => props.selected ? "#68B0AB" : "#ffffff"} ;
  padding : 2px;
  color : black;
  border-radius : 20px;
  width : 25px;
  height : 25px;
  line-height : 23px;
  cursor : pointer;
  text-align : center;
`


const Pagination: React.FC<PaginationProps> = ({ setcurrentPage, totalPages, itemsPerPage, currentPage }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
        pages.push(i);
    }

    return (
        <PaginationWrapper>
            {pages.map((page, index) => <Number selected={page === currentPage ? true : false} key={index} onClick={() => setcurrentPage(page)}>{page}</Number>)}
        </PaginationWrapper >
    )
}

export default Pagination