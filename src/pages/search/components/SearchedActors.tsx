import React from 'react'
import styled from 'styled-components';
import Spinner from '../../../components/ui/Spinner';
import { useAppSelector } from '../../../utils/hooks/hooks';

const ActorsWrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 5%;
    margin-top : 50px;
`
const ActorItem = styled.div`
    display : flex;
    width : 45%;
    gap : 30px;
    border : 1px solid #ffffff;
    margin-top : 15px;
`

const ActorImage = styled.div`
    height : 200px;
    width : 30%;
    img{
        width : 100%;
        max-width : 100%;
        height : 100%;
        object-fit : cover;
    }
`

function SearchedActors() {
    const searchedActors = useAppSelector(state => state.search.searchedActor).filter(actor => actor.profile_path ? actor.profile_path : false);
    const loading = useAppSelector(state => state.search.loading);

    return (
        <div>
            {loading === "idle" ? <></>
                : loading === "pending" ? <Spinner/>
                    : loading === "succeeded" ? <ActorsWrapper>
                        {searchedActors.map((actor, index) => {
                            return (
                                <ActorItem key={index}>
                                    <ActorImage>
                                        <img src={`https://image.tmdb.org/t/p/original` + actor.profile_path} alt="" />
                                    </ActorImage>
                                    <div>
                                        <h1>{actor.name}</h1>
                                        <p>{actor.known_for_department}</p>
                                        <p>{actor.popularity}</p>
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