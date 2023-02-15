import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Spinner from '../../../components/ui/Spinner';
import { useAppSelector } from '../../../utils/hooks/hooks';

const ActorsWrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 5%;
    margin-top : 50px;
    @media (max-width : ${props => props.theme.breakpoints.sm}){
        justify-content : space-between;
        gap : 15px;
        flex-direction : column;
    }
    
`
const ActorItem = styled.div`
    display : flex;
    width : 45%;
    gap : 30px;
    border : 1px solid #ffffff;
    margin-top : 15px;

    
    @media (max-width : ${props => props.theme.breakpoints.sm}){
        margin-top : 0;
        width : 100%;
        gap : 60px;
        .actor-info{
            display : flex;
            flex-direction : column;
            justify-content:space-around;
            h1{
                font-size : 24px;
            }
        }
        .actor-subtitle{
            display : flex;
            justify-content:space-between;
        }
    }
`

export const ActorImage = styled.div`
    height : 200px;
    width : 30%;
    img{
        width : 100%;
        max-width : 100%;
        height : 100%;
        object-fit : cover;
    }
    @media (max-width : ${props => props.theme.breakpoints.sm}){
        // width : 100%;
    }
`

function SearchedActors() {
    const searchedActors = useAppSelector(state => state.search.searchedActor).filter(actor => actor.profile_path ? actor.profile_path : false);
    const loading = useAppSelector(state => state.search.loading);
    const navigate = useNavigate();
    return (
        <div>
            {loading === "idle" ? <></>
                : loading === "pending" ? <Spinner />
                    : loading === "succeeded" ? <ActorsWrapper>
                        {searchedActors.map((actor, index) => {
                            return (
                                <ActorItem key={index} onClick={() => navigate(`/actor/${actor.id}`)}>
                                    <ActorImage>
                                        <img src={`https://image.tmdb.org/t/p/original` + actor.profile_path} alt="" />
                                    </ActorImage>
                                    <div className='actor-info'>
                                        <h1>{actor.name}</h1>
                                        <div className='actor-subtitle'>
                                            <p>{actor.known_for_department}</p>
                                            <p>{actor.popularity}</p>
                                        </div>

                                    </div>
                                </ActorItem>
                            )
                        })}
                    </ActorsWrapper>
                        : <>Error</>}

        </div>
    )
}

export default SearchedActors