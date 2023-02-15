import React from 'react'
import styled from 'styled-components'
import { handleInputData, handleSelectData } from '../../store/films/searchSlice'
import { Container } from '../../styles/GlobalStyles'
import { getSearchedActors, getSearchedMovies } from '../../utils/api/searchApi'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'
import SearchedActors from './components/SearchedActors'
import SearchedFilms from './components/SearchedFilms'


const SearchWrapper = styled.div`
    width : 70%;
    margin : 0 auto;
    display : flex;
    min-width : 250px;
    gap : 35px;
    .search{
        display : flex;
        gap: 20px;
        width : 100%;
    }
    @media (max-width : ${props => props.theme.breakpoints.md}){
        width : 100%;
        flex-direction : column;
        align-items : center;
    }
`

const SearchInput = styled.input`
    flex : 1;
    margin : 0 auto;
    padding : 8px 8px;
    height : 30px;
    background : rgba(255, 255, 128, .1);
    border : none;
    border-radius : 16px;
    color : #ffffff;
    font-size : 18px;
    &::placeholder{
        font-family : ${props => props.theme.fontFamily.second};
    }
`

const SearchButton = styled.button`
    border : none;
    background : #68B0AB;
    flex-basis : 125px;
    min-width : 100px;
    font-size : 21px;
    font-weight : 500;
    border-radius : 14px;
    cursor : pointer;
    outline: none;
    transition : 0.3s linear;
    &:hover{
        background: #0B91F3;
        color : #ffffff;
    }
`

const SelectType = styled.select`
    width : 100px;
    height : 40px;
    font-size : 18px;
    outline : none;
    padding : 0 6px;
    option{
        font-size : 16px;
    }
`

function SearchPage() {
    const dispatch = useAppDispatch();
    const inputData = useAppSelector(state => state.search.inputData);
    const selectData = useAppSelector(state => state.search.selectData);


    function handleInput(e: any) {
        dispatch(handleInputData(e));
    }

    function findData() {
        if (selectData === "Actor") {
            dispatch(getSearchedActors(inputData))
        } else {
            dispatch(getSearchedMovies(inputData))
        }
    }

    return (
        <Container>
            <SearchWrapper>
                <div className='search'>
                    <SearchInput onKeyPress={(e) => e.key === "Enter" ? findData() : ""} type="text" placeholder='Find your favourite movie or actor' onChange={(e) => handleInput(e.target.value)} />
                    <SearchButton onClick={() => findData()}>Find</SearchButton>
                </div>

                <SelectType onChange={e => dispatch(handleSelectData(e.target.value))}>
                    <option value="Movie">Movie</option>
                    <option value="Actor">Actor</option>
                </SelectType>
            </SearchWrapper>

            <>
                {
                    selectData === "Movie" ? <SearchedFilms /> : <SearchedActors />
                }
            </>


        </Container>
    )
}

export default SearchPage