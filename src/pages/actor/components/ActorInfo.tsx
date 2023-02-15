import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { FilmData } from '../../../components/film/FilmPage'
import Spinner from '../../../components/ui/Spinner'
import { ArticleText, Container } from '../../../styles/GlobalStyles'
import { getActorInfo } from '../../../utils/api/getActor'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/hooks'
import { ActorImage } from '../../search/components/SearchedActors'

const ActorData = styled(FilmData)`
    flex-wrap : wrap;
`

const ActorWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : inherit;

    
`

const ActorDataWrapper = styled.div`
    display : flex;
    gap : 10%;
    width : 100%;
    margin-top : 50px;
    @media (max-width : ${props => props.theme.breakpoints.md}){
        flex-direction : column;
    }
`

const ActorFacts = styled.div`
    flex-grow : 1;
    position : relative;
    &::after{
        position : absolute;
        content : "";
        right : -20%;
        top : 0;
        width : 2px;
        height : 90%;
        background : ${props => props.theme.colors.extra};
    }

    @media (max-width : ${props => props.theme.breakpoints.md}){
        &::after{
            display : none;
        }
    }
`

const ActorDataImage = styled(ActorImage)`
   height : auto;
   width : 300px;
   img{
    object-fit : cover;
   }
`
const ActorName = styled.p`
   font-size : 24px;
   text-align : center;
`
const BiographyText = styled(ArticleText)`
   flex-basis : 60%;
   font-size : 15px;
   line-height : 21px;
`

const ActorHomepage = styled.a`
   font-size : 14px;
`

function ActorInfo() {
    const dispatch = useAppDispatch();
    const { id } = useParams() as { id: string };
    const { actor, loading } = useAppSelector(store => store.actor)
    useEffect(() => {
        dispatch(getActorInfo(id))
    }, [])
    return (
        <>
            {
                loading === "pending" ? <Spinner /> :
                    loading === "succeeded" ? <Container>
                        <ActorWrapper>
                            <ActorDataImage>
                                <img src={"https://image.tmdb.org/t/p/original" + actor.profile_path} alt="" />
                                <ActorName>{actor.name}</ActorName>
                            </ActorDataImage>
                            <ActorDataWrapper>
                                <ActorFacts>
                                    <ActorData>
                                        <span>Birthday</span> {actor.birthday || "-"}
                                    </ActorData>
                                    <ActorData>
                                        <span>Place of birth</span> {actor.place_of_birth || "-"}
                                    </ActorData>
                                    <ActorData>
                                        <span>Deathday</span> {actor.deathday || "-"}
                                    </ActorData>
                                    <ActorData>
                                        <span>Known for</span> {actor.known_for_department || "-"}
                                    </ActorData>
                                    <ActorData>
                                        <span>Popularity</span> {actor.popularity || "-"}
                                    </ActorData>
                                    <ActorData>
                                        <span>Homepage</span>
                                        <ActorHomepage href={actor.homepage || "#"}>{actor.homepage || "#"}</ActorHomepage>
                                    </ActorData>
                                </ActorFacts>
                                <BiographyText>
                                    <h2>Biography</h2>
                                    {actor.biography}
                                </BiographyText>
                            </ActorDataWrapper>
                        </ActorWrapper>
                    </Container>
                        : <div>Failed</div>
            }
        </>
    )
}

export default ActorInfo