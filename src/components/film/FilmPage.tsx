import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import { ArticleText, Container, SectionTitle, Text } from '../../styles/GlobalStyles'
import { getFilmDetails } from '../../utils/api/getFilms';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'

const FilmTitle = styled(SectionTitle)`
    margin : 0 0 15px 0;
`

const FilmWrapper = styled.section`
    display  :flex;
    justify-content : space-between;
    align-items : flex-start;
    gap : 50px;
`

const FilmImage = styled.div`
    flex-basis : 40%;
    min-width : 400px;
    margin-top : 45px;
    img{
        width : 100%;
        height : auto;
        object-fit : cover;
    }
`
const FilmInfo = styled.div`
    display : flex;
    flex-direction : column;
    align-items:center;
    flex-grow : 0;
`
const FilmData = styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 18px;
    padding-bottom : 10px;
    width : 100%;
    border-bottom : 1px solid rgba(255,255,255,0.6);
    .data{
        text-align : right;
        p{
            margin : 0 0 4px 0;
        }
    }
`

function FilmPage() {
    const { id } = useParams() as { id: string };
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.film.loading)
    const film = useAppSelector(state => state.film.film)

    useEffect(() => {
        dispatch(getFilmDetails(id))
    }, [])

    return (
        <>
            {loading == "pending" ? <div>Loading...</div>
                : loading == "succeeded" ? < Container >
                    <FilmWrapper>
                        <FilmImage>
                            <img src={"https://image.tmdb.org/t/p/original" + film.backdrop_path} alt="" />
                        </FilmImage>
                        <FilmInfo>
                            <FilmTitle>{film.title}</FilmTitle>
                            <ArticleText>
                                {film.overview }
                            </ArticleText>
                            <FilmData>
                                <span>Original Title</span> {film.original_title || "-"}
                            </FilmData>
                            <FilmData>
                                <span>Original language</span> {film.original_language || "-"}
                            </FilmData>
                            <FilmData>
                                <span>Status</span> {film.status || "-"}
                            </FilmData>
                            <FilmData>
                                <span>Realese Date</span> {film.release_date || "-"}
                            </FilmData>
                            <FilmData>
                                <span>Production countries</span> <div className='data'>{film.production_countries.map(country => <p >{country.name}</p>) || "-"}</div>
                            </FilmData>
                            <FilmData>
                                <span>Companies</span> <div className='data'>{film.production_companies.map(company => <p >{company.name}</p>) || "-"}</div>
                            </FilmData>
                            <FilmData>
                                <span>Genres</span> <div className='data'>{film.genres.map(genre => <p>{genre.name}</p>) || "-"}</div>
                            </FilmData>
                            <FilmData>
                                <span>Votes</span> {film.vote_average || "-"}
                            </FilmData>
                        </FilmInfo>
                    </FilmWrapper>
                </Container>
                    : loading == "failed" ? <div>Failed</div> : <div>Failed</div>
            }
        </>
    )
}

export default FilmPage