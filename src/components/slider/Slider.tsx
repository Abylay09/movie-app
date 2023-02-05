import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPopularMovies } from '../../utils/api/getFilms';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { Pagination, Navigation } from "swiper";
import {SectionTitle } from '../../styles/GlobalStyles'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import { useNavigate } from 'react-router';
import Spinner from '../ui/Spinner';


const SliderImg = styled.div`
    cursor : pointer;
    img{
        width : 100%;
        height : auto;
        object-fit : cover;
    }
`

const SliderTitle = styled.p`
    font-size : 21px;
    font-family :  ${props => props.theme.fontFamily.second};
    text-align:center;
`

function Slider() {
    const dispatch = useAppDispatch();
    const popularFilms = useAppSelector(state => state.films.popularFilms);
    const loading = useAppSelector(state => state.films.loading);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getPopularMovies())
    }, [])

    if (loading == "pending") {
        return <Spinner/>
    }

    return (
        <>
            <SectionTitle>Popular films</SectionTitle>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                spaceBetween={50}
                slidesPerView={2}
            >
                {popularFilms.map(film => <SwiperSlide key={film.id} onClick = {() => navigate(`/film/${film.id}`)}>
                    <SliderImg>
                        <img src={"https://image.tmdb.org/t/p/original" + film.backdrop_path} alt="" />
                        <SliderTitle>{film.title}</SliderTitle>
                    </SliderImg>
                </SwiperSlide>
                )}
            </Swiper>
        </>

    )
}

export default Slider
