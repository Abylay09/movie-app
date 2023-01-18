import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPopularMovies } from '../../utils/api/getFilms';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { Pagination, Navigation } from "swiper";

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css'


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

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [])

    if (loading == "pending") {
        return <div>Loading</div>
    }

    return (
        <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
                type: "progressbar",
            }}
            navigation={true}
            spaceBetween={50}
            slidesPerView={2}
        >
            {popularFilms.map(film => <SwiperSlide>
                <SliderImg>
                    <img src={"https://image.tmdb.org/t/p/original" + film.backdrop_path} alt="" />
                    <SliderTitle>{film.title}</SliderTitle>
                </SliderImg>
            </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Slider
